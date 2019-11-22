<?php

namespace KABBOUCHI\NovaImpersonate;

use Illuminate\Database\Eloquent\Model;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Resource;

class Impersonate extends Field
{
    public $textAlign = 'center';
    public $component = 'impersonate-field';
    public $meta = [
        'hideText'    => true,
        'redirect_to' => '/',
        'enable_multi_guard' => false,
        'impersonator_guards' => ['web'],
        'default_impersonator_guard' => 'web',
        'impersonate_target_name' => null,
    ];

    public function __construct($user = null)
    {
        parent::__construct(null, null, null);

        $this->exceptOnForms();

        if (method_exists(auth()->user(), 'canImpersonate') && ! auth()->user()->canImpersonate()) {
            $this->component = null;

            return;
        }

        if ($user != null) {
            if (is_numeric($user) || is_string($user)) {
                $this->withMeta(['id' => $user instanceof Model ? $user->getKey() : $user]);
            } else {
                $user = $user instanceof Resource ? $user->resource : $user;

                if (method_exists($user, 'canBeImpersonated') && ! $user->canBeImpersonated()) {
                    $this->component = null;

                    return;
                }

                $this->withMeta(['id' => $user instanceof Model ? $user->getKey() : $user]);
            }
        }

        $this->withMeta([
            'key_down' => config('nova-impersonate.key_down'),
            'redirect_to' => config('nova-impersonate.redirect_to'),
            'enable_multi_guard' => config('nova-impersonate.enable_multi_guard'),
            'impersonator_guards' =>  config('nova-impersonate.impersonator_guards'),
            'default_impersonator_guard' =>  config('nova-impersonate.default_impersonator_guard'),
            'impersonate_target_name' => $user->name ?? $user->email ?? null,
        ]);
    }
}
