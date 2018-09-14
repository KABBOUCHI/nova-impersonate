<?php

namespace KABBOUCHI\NovaImpersonate\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
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

	public function take(Request $request, $user)
	{
		$user_to_impersonate = $this->manager->findUserById($user);
		$this->manager->take($request->user(), $user_to_impersonate);

		return redirect()->to('/');
	}

	public function leave()
	{

		if ($this->manager->isImpersonating()) {
			$this->manager->leave();

			return redirect()->to(config('nova.path'));
		}

		return redirect()->to('/');
	}
}