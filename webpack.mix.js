// webpack.mix.js

let mix = require('laravel-mix');

mix
    .js('src/js/app.js', 'dist/js').vue({ version: 2 })
    .setPublicPath('dist')
    .sass('src/scss/main.scss', 'dist/css')
    .options({processCssUrls: false})
    .copy('src/index.html', 'dist');