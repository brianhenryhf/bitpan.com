# bitpan.com

This is a Jekyll site deployed to Cloudflare Pages.

Locally, this can be built for developemnt by installing jekyll (via `bundle install`), and then using `bundle exec jekyll b` to build and `bundle exec jekyll b` to serve.

Deployment is via pushing master branch changes, letting Cloudflare pull code via a GitHub App, to run build/deploy steps at Cloudflare.
