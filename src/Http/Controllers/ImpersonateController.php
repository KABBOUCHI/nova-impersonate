<?php

namespace KABBOUCHI\NovaImpersonate\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Laravel\Nova\Actions\ActionEvent;
use Lab404\Impersonate\Services\ImpersonateManager;

class ImpersonateController extends Controller
{
	/** @var ImpersonateManager */
	protected $manager;

	/**
	 * ImpersonateController constructor.
	 */
	public function __construct()
	{
		$this->manager = app()->make(ImpersonateManager::class);
	}

	public function take(Request $request, $id)
	{

		if (method_exists($request->user(), 'canImpersonate') && !$request->user()->canImpersonate()) {
			abort(403);
		}

		$user_to_impersonate = $this->manager->findUserById($id);


		if (method_exists($user_to_impersonate, 'canBeImpersonated') && !$user_to_impersonate->canBeImpersonated()) {
			abort(403);
		}

		if (config('nova-impersonate.actionable')) {
			$this->recordAction($request->user()->getKey(), $user_to_impersonate, 'Impersonate');
		}

		if (config('nova-impersonate.leave_before_impersonate') && $this->manager->isImpersonating()) {
			if (config('nova-impersonate.actionable')) {
				$this->recordAction($this->manager->getImpersonatorId(), auth()->user(), 'Leave Impersonation');
			}

			$this->manager->leave();
		}

		$this->manager->take($request->user(), $user_to_impersonate);

		$redirectBack = config('nova-impersonate.redirect_back');

		if ($redirectBack)
			session()->put('leave_redirect_to', $redirectBack === true ? url()->previous() : $redirectBack);

		return redirect()->to($request->get('redirect_to', config('nova-impersonate.redirect_to')));
	}

	public function leave()
	{

		if ($this->manager->isImpersonating()) {
			if (config('nova-impersonate.actionable')) {
				$this->recordAction($this->manager->getImpersonatorId(), auth()->user(), 'Leave Impersonation');
			}

			$this->manager->leave();

			return redirect()->to(session()->pull('leave_redirect_to') ?? config('nova.path'));
		}

		return redirect()->to('/');
	}

	protected function recordAction($userId, $user_to_impersonate, $actionName) 
	{
		ActionEvent::create([
			'batch_id' => (string)Str::orderedUuid(),
			'user_id' => $userId,
			'name' => $actionName,
			'actionable_type' => $user_to_impersonate->getMorphClass(),
			'actionable_id' => $user_to_impersonate->getKey(),
			'target_type' => $user_to_impersonate->getMorphClass(),
			'target_id' => $user_to_impersonate->getKey(),
			'model_type' => $user_to_impersonate->getMorphClass(),
			'model_id' => $user_to_impersonate->getKey(),
			'fields' => '',
			'status' => 'finished',
			'exception' => '',
		]);
	}
}
