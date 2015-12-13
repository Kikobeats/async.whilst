'use strict'

var noop = function () {}
var restParam = require('lodash.restparam')

module.exports = function whilst (test, iterator, cb) {
  cb = cb || noop
  if (!test()) cb(null)

  var next = restParam(function (err, args) {
    if (err) return cb(err)
    if (test.apply(this, args)) iterator(next)
    else cb.apply(null, [null].concat(args))
  })
  iterator(next)
}
