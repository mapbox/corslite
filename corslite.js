function xhr(url, callback, cors) {

    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    var x, twoHundred = /^20\d$/;

    if (cors && (
        // IE7-9 Quirks & Compatibility
        typeof window.XDomainRequest === 'object' ||
        // IE9 Standards mode
        typeof window.XDomainRequest === 'function'
    )) {
        // IE8-10
        x = new window.XDomainRequest();
    } else {
        x = new window.XMLHttpRequest();
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = function load() {
            callback.call(this, null, this);
        };
    } else {
        x.onreadystatechange = function readystate() {
            if (this.readyState === 4) {
                if (twoHundred.test(this.status)) callback.call(this, null, this);
                else callback.call(this, this, null);
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        callback.call(this, evt);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function() {
        callback.call(this, evt);
        callback = function() { };
    };

    x.onabort = function() {
        callback.call(this, evt);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);

    return xhr;
}

if (typeof module !== 'undefined') module.exports = xhr;
