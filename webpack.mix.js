const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/img/', 'public/img').js(['resources/js/progressbar.min.js','resources/js/anime.es.js'],'public/js').js('resources/js/main.js', 'public/js/main.js')
    .sass('resources/sass/app.scss', 'public/css');
//
//

// mix.js(['resources/js/anime.es.js','resources/js/progressbar.min.js'],'public/js').js(['resources/js/imports.js','resources/js/main.js','resources/js/cursor.js'], 'public/js/main.js')
//    .sass('resources/sass/app.scss', 'public/css')
//     .copy('resources/img/', 'public/img');

