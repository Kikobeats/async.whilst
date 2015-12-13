'use strict'

var whilst = require('..')
var should = require('should')

describe('whilst', function () {
  it('works fine', function (done) {
    var call_order = []
    var count = 0

    whilst(
      function () {
        call_order.push(['test', count])
        return (count < 5)
      },
      function (cb) {
        call_order.push(['iterator', count])
        count++
        cb(null, count)
      },
      function (err, result) {
        result.should.be.equal(5)
        call_order.should.be.eql([
          ['test', 0],
          ['iterator', 0], ['test', 1],
          ['iterator', 1], ['test', 2],
          ['iterator', 2], ['test', 3],
          ['iterator', 3], ['test', 4],
          ['iterator', 4], ['test', 5]
        ])
        done(err)
      }
    )
  })
})
