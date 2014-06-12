var test = require('tape'),
    xhr = require('./');

test('200', function (t) {
    t.plan(2);
    xhr('/200', function(err, resp) {
        t.equal(err, null);
        t.equal(resp.responseText, '200');
    }, true);
});

test('404', function (t) {
    t.plan(3);
    xhr('/404', function(err, resp) {
        t.ok(err);
        t.equal(err.status || 404, 404);
        t.equal(resp, null);
    }, true);
});

test('DNS error', function (t) {
    t.plan(3);
    xhr('http://a.b.c.d/', function(err, resp) {
        t.ok(err);
        t.equal(err.type || 'error', 'error');
        t.equal(resp, null);
    }, true);
});
