<?php

namespace KABBOUCHI\NovaImpersonate\Http\Middleware;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
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

        $manager = app('impersonate');

        if (
            $manager->isImpersonating() &&

            auth()->check() &&

            ! ($response instanceof RedirectResponse) &&

            ! ($response instanceof BinaryFileResponse) &&

            ! ($response instanceof StreamedResponse) &&

            ! ($response instanceof JsonResponse) &&

            ! $request->expectsJson() &&

            Str::startsWith($response->headers->get('Content-Type'), 'text/html') &&

            ! Str::contains($request->path(), 'nova-api')
        ) {

            /** @var Response $response * */
            $content = $response->getContent();

            $content .= view('nova-impersonate::reverse')->render();

            $response->setContent($content);
        }

        return $response;
    }
}
