# bitpan.com

This is a Jekyll site deployed to Cloudflare Pages, and associated server-side Cloudflare Functions, for the Bitpan 
Solutions company brochure site.

Locally, this can be built for developemnt by installing jekyll (via `bundle install`), and then using `bundle exec jekyll b` to build and `bundle exec jekyll s` to serve.

Deployment is via pushing master branch changes, letting Cloudflare pull code via a GitHub App, to run build/deploy steps at Cloudflare.

Note that this contains a `package.json` currently to satisfy CF Functions need for dependency specification for remote
build - this is not locally runnable in any useful way, nor uses any interesting client-side js libs.

REM: config or css file changes require a jekyll rebuild to take effect.

--
TODOs:
