burrows-wheeler
===============
A very simple implementation of the [Burrows-Wheeler transform](https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform).  This is mainly made as a demonstration of ndarray-string and ndarray-sort.

## Example

```javascript
var bwt = require("burrows-wheeler")

//Execute a forward transform
var y = bwt(1, "banana")
console.log(y)

var z = bwt(-1, y)
console.log(z)
```

## Install

    npm install burrows-wheeler

## API

### `require("burrows-wheeler")(direction, string)`
Applies the Burrows-Wheeler transform to string.

* `direction` if set to 1 does a forward transform, else if set to -1 does an inverse transform
* `string` is the string to transform

**Returns** The forward/inverse Burrows-Wheeler transform of string

## Credits
(c) 2013 Mikola Lysenko. MIT License

