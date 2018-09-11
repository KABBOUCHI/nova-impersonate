<?php

namespace KABBOUCHI\NovaImpersonate\Http\Middleware;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Lab404\Impersonate\Services\ImpersonateManager;

class Impersonate
{
	/**
	 * Handle the incoming request.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  \Closure $next
	 * @return \Illuminate\Http\Response
	 */
	public function handle($request, $next)
	{

		$response = $next($request);

		/** @var ImpersonateManager $manager */
		$manager = app()->make(ImpersonateManager::class);

		if ($manager->isImpersonating() && !($response instanceof RedirectResponse)) {

			/** @var Response $response * */
			$content = $response->getContent();

			$content .= view('NovaImpersonate::reverse')->render();

			$response->setContent($content);
		}

		return $response;
	}
}
