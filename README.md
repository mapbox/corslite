## corslite

![](https://ci.testling.com/mapbox/corslite.png)

```js
xhr('http://b.tiles.mapbox.com/v3/tmcw.dem.json', function(err, resp) {
    // resp is the XMLHttpRequest object
}, true); // cross origin?
```

an AJAX library focused on simplicity and supporting IE8-10 with cross domain
requests.

We're making a deal with the devil and using [XDomainRequest](http://bit.ly/XTxZet)
in hopes that it is less a hack than [JSONP](http://en.wikipedia.org/wiki/JSONP).
This comes with caveats:

* No headers are permitted on requests
* Only 'GET'
