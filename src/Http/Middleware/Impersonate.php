<?php

namespace KABBOUCHI\NovaImpersonate\Http\Middleware;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Lab404\Impersonate\Services\ImpersonateManager;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;

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

		if (
			auth()->check() &&

			$manager->isImpersonating() &&

			!($response instanceof RedirectResponse) &&

			!($response instanceof BinaryFileResponse) &&
			
			!($response instanceof StreamedResponse) &&

			$request->acceptsHtml() &&

			!$request->expectsJson() &&

            		! \str_contains($request->path(), 'nova-api')
		) {

			/** @var Response $response * */
			$content = $response->getContent();

			$content .= view('nova-impersonate::reverse')->render();

			$response->setContent($content);
		}

		return $response;
	}
}
