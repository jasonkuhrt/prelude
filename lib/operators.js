var I = require('immutable')
var toI = I.fromJS

function isPrimitive(a){
  var t = typeof a
  return t === 'number' ||
         t === 'boolean' ||
         t === 'string' ||
         t === 'undefined' ||
         a === null
}



var api = {}



// Basic Math

api.mul = function mul(a, b){ return a * b }
api.dev = function div(a, b){ return a / b }
api.add = function add(a, b){ return a + b }
api.sub = function sub(a, b){ return a - b }
api.mod = function mod(a, b){ return a % b }
api.eq  = function eq(a, b){
  if (isPrimitive(a) || isPrimitive(b)) return a === b
  if (typeof a === 'function' || typeof b === 'function') return a === b
  return I.is(a, b)
}
api.neq = function neq(a, b){ return a !== b }
api.eq_ = function eq_(a, b){ return a == b }
api.neq_ = function neq_(a, b){ return a !== b }

// Additional Math
// even :: Integral a => a -> Bool
// odd :: Integral a => a -> Bool
// gcd :: Integral a => a -> a -> a
// lcm :: Integral a => a -> a -> a
// (^) :: (Num a, Integral b) => a -> b -> a
// (^^) :: (Fractional a, Integral b) => a -> b -> a


// Relational

api.gt  = function gt(a, b){ return a > b }
api.gte = function gte(a, b){ return a >= b }
api.lt  = function lt(a, b){ return a < b }
api.lte = function lte(a, b){ return a <= b }
// Ignoring for lack of use-cases:
// - api.in
// - api.instanceof



// Logical

api.not = function not(a){ return !a }
api.and = function and(a, b){ return a && b }
api.or = function or(a, b){ return a || b }



// Property Access

// dot :: AccessString a => a -> {*} -> b
// dot :: String a => [a] -> {*} -> b
api.dot = function dot(path, o){
  if (o === null) return undefined
  if (typeof path === 'string') return path === '' ? o : api.dot(path.split('.'), o)

  o = toI(o)
  if (o.getIn) return o.getIn(path)

  for (var k, v, i = 0; i < path.length; i++) {
    k = path[i]; v = o[k]
    if (typeof v === 'undefined' || v === null) {
      return o.hasOwnProperty(k) ? v : null
    }
    o = v
  }

  return o
}


module.exports = require('./utils/purry-api')(api)
module.exports.bitwise = require('./operators-bitwise')
