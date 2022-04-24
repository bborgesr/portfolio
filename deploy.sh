#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# commit
git init
git add -A
git commit -m 'deploy'

# deploying to https://bborgesr.github.io/portfolio
git push -f git@github.com:bborgesr/portfolio.git main:gh-pages

cd -