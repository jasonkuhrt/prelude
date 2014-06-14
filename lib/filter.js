var purry = require('purry')
var is_plain_object = require('./utils/is-plain-object')
var is_truthy = require('./utils/is-truthy')



module.exports = purry(filter)

function filter(f, functor){
  if (functor.filter) return functor.filter(f)
  if (is_plain_object(functor)) return hash_filter(f, functor)
}


function hash_filter(f, pojo){
  var _pojo = {}
  for (var k in pojo) {
    if (is_truthy(f(pojo[k], k))) {
      _pojo[k] = pojo[k]
    }
  }
  return _pojo
}