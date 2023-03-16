# bitpan.com

This is code for the Bitpan Solutions company brochure site, a Jekyll site deployed to Cloudflare Pages, and associated
server-side Cloudflare Functions.

Locally, this can be built for development by installing jekyll (via `bundle install`), and then using `bundle exec jekyll b` to build and `bundle exec jekyll s` to serve.

Deployment is via pushing master branch changes, letting Cloudflare pull code via a GitHub App, to run build/deploy steps at Cloudflare.

Note that this contains a `package.json` currently to satisfy CF Functions' need for dependency specification.  This is used in the remote
build - JS in this project is not locally runnable in any useful way, nor does it use any interesting client-side js libs.

REM: config or css file changes require a jekyll rebuild to take effect.

## Quirks:
- Currently, a watch-based (local) rebuild of the code will throw out the custom.css file used here (a conflict exists with the theme
  gem's empty default custom.css). A full `jekyll build` will fix it - do this if suddenly styles vanish in local server.

## TODOs:
- SEO is not dealt with - defaults are wonky.  Social is also not configured at the moment.
