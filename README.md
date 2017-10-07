![a floating can of corslite](https://f.cloud.github.com/assets/83384/341733/2fc1dcb8-9d7a-11e2-8ad1-7961248920c3.png)

## corslite

[![Build Status](https://travis-ci.org/mapbox/corslite.svg?branch=master)](https://travis-ci.org/mapbox/corslite)

```js
corslite('http://b.tiles.mapbox.com/v3/tmcw.dem.json', function(err, resp) {
    // resp is the XMLHttpRequest object
}, true); // cross origin?
```

Example GET request JSON synchronous method with callback and data set on the request

```js
corslite('http://b.tiles.mapbox.com/v3/tmcw.dem.json', function(err, response) {
		if (err){
				//make something when error
		}else{
				//make something with response
				// resp is the XMLHttpRequest object
		}       
    },true,'GET',{lat:0,lng:0},'json',false
);
```

Example POST request JSON synchronous method with callback and not data set on the request

```js
corslite('http://b.tiles.mapbox.com/v3/tmcw.dem.json', function(err, response) {
		if (err){
				//make something when error
		}else{
				//make something with response
				// resp is the XMLHttpRequest object
		}       
    },true,'POST',null,'json',false
);
```

an AJAX library focused on simplicity and supporting IE8-10 with cross domain
requests. But you can do synchronous method call either.

We're making a deal with the devil and using [XDomainRequest](http://bit.ly/XTxZet)
in hopes that it is less a hack than [JSONP](http://en.wikipedia.org/wiki/JSONP).
This comes with caveats:


* The only header permitted is 'Content-type'
* No access error diagnostics (status code, response body) on IE
