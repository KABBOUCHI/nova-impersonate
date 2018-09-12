# Nova Impersonate Field

[![Latest Version on Packagist](https://img.shields.io/packagist/v/kabbouchi/nova-impersonate.svg?style=flat-square)](https://packagist.org/packages/kabbouchi/nova-impersonate)
[![Total Downloads](https://img.shields.io/packagist/dt/kabbouchi/nova-impersonate.svg?style=flat-square)](https://packagist.org/packages/kabbouchi/nova-impersonate)


This field allows you to authenticate as your users.

![screenshot1](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot1.png?123)
![screenshot2](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot2.png?123)
![screenshot2](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot3.png?123)

Behind the scenes [404labfr/laravel-impersonate](https://github.com/404labfr/laravel-impersonate) is used.

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require kabbouchi/nova-impersonate
php artisan vendor:publish --tag=nova-impersonate-views
```

## Usage

Add `Impersonate::make($this->id)` field in `App\Nova\User.php`
```php
<?php

namespace App\Nova;

use KABBOUCHI\NovaImpersonate\Impersonate;

...

class User extends Resource
{
	...
	
	public function fields(Request $request)
	{
		return [
			ID::make()->sortable(),

			Gravatar::make(),

			Text::make('Name')
				->sortable()
				->rules('required', 'max:255'),

			Text::make('Email')
				->sortable()
				->rules('required', 'email', 'max:255')
				->creationRules('unique:users,email')
				->updateRules('unique:users,email,{{resourceId}}'),

			Password::make('Password')
				->onlyOnForms()
				->creationRules('required', 'string', 'min:6')
				->updateRules('nullable', 'string', 'min:6'),


			Impersonate::make($this->id),  // <---
			
			// or
			Impersonate::make()->withMeta([ 'id' => $this->id  ]),
			
			// or
			Impersonate::make()->withMeta([
			    'id' => $this->id,
			    'hideText' => false,
			]),

		];
	}

    ...
}
```



## Credits

- [Georges KABBOUCHI](https://github.com/kabbouchi)

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
