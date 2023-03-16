# bitpan.com

This is a Jekyll site deployed to Cloudflare Pages, and associated server-side Cloudflare Functions, for the Bitpan 
Solutions company brochure site.

Locally, this can be built for developemnt by installing jekyll (via `bundle install`), and then using `bundle exec jekyll b` to build and `bundle exec jekyll s` to serve.

Deployment is via pushing master branch changes, letting Cloudflare pull code via a GitHub App, to run build/deploy steps at Cloudflare.

REM: config or css file changes require a jekyll rebuild to take effect.

TODOs:
- throw up a form and quick Cloudflare function (to keep with same hosting) to collect email requests?