all: bundle.js

bundle.js: test/*.js
	node_modules/.bin/browserify test/*.js > bundle.js
