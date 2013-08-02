"use strict"

var bwt = require("../bwt.js")

var y = bwt(1, "banana")
console.log(y)

var z = bwt(-1, y)
console.log(z)
