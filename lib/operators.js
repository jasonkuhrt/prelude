var api = {}



// Basic Math

api.mul = function mul(a, b){ return a * b }
api.dev = function div(a, b){ return a / b }
api.add = function add(a, b){ return a + b }
api.sub = function sub(a, b){ return a - b }
api.mod = function mod(a, b){ return a % b }
api.eq  = function eq(a, b){ return a === b }
api.neq = function neq(a, b){ return a !== b }
api.eq_ = function eq_(a, b){ return a == b }
api.neq_ = function neq_(a, b){ return a !== b }



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
  if (typeof path === 'string') {
    if (path === '') return o
    path = path.split('.')
  }

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