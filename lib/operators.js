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

// dot :: String a => a -> {*} -> b
// dot :: String a => [a] -> {*} -> b
api.dot = function dot(path, o){
  console.log(2)
  var k, v = o
  if (typeof o !== 'object') return null

  if (typeof path === 'string') path = path.split('.')

  for (var i = 0; i < path.length; i++) {
    k = path[i]
    if (!v.hasOwnProperty(k)) break
    v = v[k]
  }

  return v
}


api.dot = require('purry')(api.dot);
// module.exports = require('./utils/purry-api')(api)
module.exports = api

// module.exports.bitwise = require('./operators-bitwise')