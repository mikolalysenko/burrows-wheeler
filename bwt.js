"use strict"

var ndarray = require("ndarray")
var ndstring = require("ndarray-string")
var ndsort = require("ndarray-sort")
var ops = require("ndarray-ops")

function bwtForward(str) {
  str = "\0" + str
  var n = str.length
  var x = ndstring(str + str, [n, n], [1, 1])
  var y = ndarray(new Uint32Array(n*n), [n, n])
  ops.assign(y, x)
  ndsort(y)
  return ndstring.toString(y.pick(undefined, n-1))
}

function bwtInverse(str) {
  var x = ndstring(str)
  var n = x.shape[0]
  var y = ndarray(new Uint32Array(n*n), [n,n])
  for(var i=n-1; i>=0; --i) {
    ops.assign(y.pick(undefined, i), x)
    ndsort(y.lo(undefined, i))
  }
  return ndstring.toString(y.pick(0).lo(1))
}

function bwt(dir, str) {
  if(dir > 0) {
    return bwtForward(str)
  } else if(dir < 0) {
    return bwtInverse(str)
  } else {
    return str
  }
}

module.exports = bwt
