<?php

return [
    'enable_middleware' => true,
    'redirect_back'     => true, // false (nova path), true or <url>
    'redirect_to'       => '/',
    'key_down'          => 'i',
    'middleware'        => [
        /**
         * Middleware used for nova-impersonate routes
         */
        'base' => 'web',
        /**
         * Extra middleware used for leave route
         */
        'leave'  => 'auth',
    ],
];