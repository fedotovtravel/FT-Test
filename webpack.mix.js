const mix = require('laravel-mix');
var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

mix.js('resources/js/src/main.js', 'public/js')
   .sass('resources/js/src/assets/css/main.scss', 'public/css')
   .version()
   .webpackConfig({
      plugins: [
          new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, 'public'),
              routes: [
                  '/'
              ]
          })
      ]
   });