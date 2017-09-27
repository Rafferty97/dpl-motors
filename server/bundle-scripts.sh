#!/bin/sh

cat scripts/superagent.js > bundle.js
echo "

" >> bundle.js
cat scripts/better-scripts.js >> bundle.js