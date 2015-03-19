// User jQuery/Modernizr to check for browser compatibility and load polyfills as required
Modernizr.load({
	test: Modernizr.beer,
	nope: 'lib/script/beer.js'
});