<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Lab404\Impersonate\Services\ImpersonateManager;

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

Route::get('users/{user}', function (Request $request, User $user) {
	$manager = app()->make(ImpersonateManager::class);;
	$manager->take(auth()->user(), $user);

	return redirect()->to('/');
})->middleware(['web', 'nova']);

Route::get('leave', function (Request $request, User $user) {
	$manager = app()->make(ImpersonateManager::class);

	if ($manager->isImpersonating()) {
		$manager->leave();
		return redirect()->to(config('nova.path'));
	}

	return redirect()->to('/');
})->middleware(['web', 'auth']);