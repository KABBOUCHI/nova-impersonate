# Nova Impersonate Field

[![Latest Version on Packagist](https://img.shields.io/packagist/v/kabbouchi/nova-impersonate.svg?style=flat-square)](https://packagist.org/packages/kabbouchi/nova-impersonate)
[![Total Downloads](https://img.shields.io/packagist/dt/kabbouchi/nova-impersonate.svg?style=flat-square)](https://packagist.org/packages/kabbouchi/nova-impersonate)


This field allows you to authenticate as your users.

![screenshot1](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot1.png?123)
![screenshot2](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot2.png?123)
![screenshot3](https://raw.githubusercontent.com/KABBOUCHI/nova-impersonate/master/docs/screenshot3.png?123)

Behind the scenes [404labfr/laravel-impersonate](https://github.com/404labfr/laravel-impersonate) is used.

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require kabbouchi/nova-impersonate
```

## Usage

Add `Impersonate::make($this)` field in `App\Nova\User.php`
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


			Impersonate::make($this),  // <---
		
			// or
            
            Impersonate::make($this->resource), // works in lenses
            
            // or
		
			Impersonate::make($this)->withMeta([
			    'hideText' => false,
			]),
		
			// or
		
			Impersonate::make($this)->withMeta([
			    'redirect_to' => '/custom-redirect-url'
			]),

		];
	}

    ...
}
```

## Advanced Usage

By default all users can **impersonate** an user.  
You need to add the method `canImpersonate()` to your user model:

```php
    /**
     * @return bool
     */
    public function canImpersonate()
    {
        // For example
        return $this->is_admin == 1;
    }
```

By default all users can **be impersonated**.  
You need to add the method `canBeImpersonated()` to your user model to extend this behavior:
Please make sure to pass instance Model or Nova Resource ``Impersonate::make($this)`` ``Impersonate::make($this->resource)``

```php
    /**
     * @return bool
     */
    public function canBeImpersonated()
    {
        // For example
        return $this->can_be_impersonated == 1;
    }
```
---

#### Events

You can hook onto the underlying package events

May be userful for things like setting session data

- `Lab404\Impersonate\Events\TakeImpersonation`
- `Lab404\Impersonate\Events\LeaveImpersonation`

---

You can optionally publish the config file with:
```bash
php artisan vendor:publish --tag=nova-impersonate-config
```

This is the default content of the config file published at `config/nova-impersonate.php`:
```php
<?php

return [
	'enable_middleware' => true, // To inject the 'nova-impersonate::reverse' view in every route when impersonating 
	'redirect_back'     => true, // false (nova path), true or <url>
	'redirect_to'       => '/',
	'key_down'          => 'i', // Press `i` to impersonate user in details page
	'middleware'        => [
            'base' => 'web', // Middleware used for nova-impersonate routes
            'leave'  => 'auth', // Extra middleware used for leave route
    ],
];
```

You can publish and customize the `nova-impersonate::reverse` view

```bash
php artisan vendor:publish --tag=nova-impersonate-views
```


## Credits

- [Georges KABBOUCHI](https://github.com/kabbouchi)

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
