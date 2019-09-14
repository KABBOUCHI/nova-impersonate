<?php

use Illuminate\Support\Facades\Route;
use KABBOUCHI\NovaImpersonate\Http\Controllers\ImpersonateController;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

Route::get('users/{id}/{guardName?}', ImpersonateController::class.'@take')->middleware(['nova'])->name('take');

Route::get('leave', ImpersonateController::class.'@leave')->middleware([config('nova-impersonate.middleware.leave')])->name('leave');
