let mix = require("laravel-mix");
let path = require("path");
require("./nova.mix");

mix.setPublicPath("dist")
    .js("resources/js/field.js", "js")
    .vue({
        version: 3,
        options: {
            compilerOptions: {
                isCustomElement: (tag) => ["portal"].includes(tag),
            },
        },
    })
    .nova("kabbouchi/nova-impersonate")
    .webpackConfig({
        resolve: {
            symlinks: false,
        },
    });

mix.alias({
    "laravel-nova": path.join(
        __dirname,
        "vendor/laravel/nova/resources/js/mixins/packages.js"
    ),
});
