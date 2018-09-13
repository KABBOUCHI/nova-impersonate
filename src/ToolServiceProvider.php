<?php

namespace KABBOUCHI\NovaImpersonate;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Lab404\Impersonate\Services\ImpersonateManager;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ToolServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		Nova::script('nova-impersonate', __DIR__ . '/../dist/js/field.js');
		Nova::style('nova-impersonate', __DIR__ . '/../dist/css/field.css');

		$this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-impersonate');
		$this->publishes([ __DIR__ . '/../resources/views' => base_path('resources/views/vendor/nova-impersonate'),
		], 'nova-impersonate-views');

		$this->app->booted(function () {
			$this->app['Illuminate\Contracts\Http\Kernel']->pushMiddleware(\KABBOUCHI\NovaImpersonate\Http\Middleware\Impersonate::class);
			$this->routes();
		});

		Nova::serving(function (ServingNova $event) {
			//
		});
	}

	/**
	 * Register the tool's routes.
	 *
	 * @return void
	 */
	protected function routes()
	{

		if ($this->app->routesAreCached()) {
			return;
		}

		Route::middleware(['web'])
			->prefix('nova-impersonate')
			->group(__DIR__ . '/../routes/api.php');

	}

}
