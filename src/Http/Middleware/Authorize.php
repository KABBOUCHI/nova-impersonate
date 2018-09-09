<?php

namespace KABBOUCHI\NovaImpersonate\Http\Middleware;

use KABBOUCHI\NovaImpersonate\Impersonate;

class Authorize
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
        return  $next($request);
    }
}
