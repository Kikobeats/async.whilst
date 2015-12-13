# async.whilst

![Last version](https://img.shields.io/github/tag/Kikobeats/async.whilst.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/async.whilst/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/async.whilst)
[![Dependency status](http://img.shields.io/david/Kikobeats/async.whilst.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.whilst)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/async.whilst.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.whilst#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/async.whilst.svg?style=flat-square)](https://www.npmjs.org/package/async.whilst)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Call a function and stop under condition or error occurs.

## Install

```bash
npm install async.whilst --save
```
If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install async.whilst --save
```

and later link in your HTML:

```html
<script src="bower_components/async.whilst/dist/async.whilst.js"></script>
```
## Usage

```js
var whilst = require('async.whilst')
var count = 0

whilst(
  function condition() { return count < 5; },
  function loop(cb) {
    count++
    setTimeout(function () {
      cb(null, count)
    }, 1000)
  },
  function end(err, n) {
    // 5 seconds have passed, n = 5
  }
)
```

## API

### whilst(test, fn, cb)

__Arguments__

* `test()` - synchronous truth test to perform before each execution of `fn`.
* `fn(callback)` - A function which is called each time `test` passes. The function is
  passed a `callback(err)`, which must be called once it has completed with an
  optional `err` argument.
* `callback(err, [results])` - A callback which is called after the test
  function has failed and repeated execution of `fn` has stopped. `callback`
  will be passed an error and any arguments passed to the final `fn`'s callback.

## License

MIT © [Kiko Beats](http://kikobeats.com)
