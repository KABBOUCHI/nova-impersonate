<?php

namespace KABBOUCHI\NovaImpersonate\Http\Middleware;

class Impersonate
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {

		$response = $next($request);

		dd(session()->all());
//		dd($response);

        return $response;
    }
}
