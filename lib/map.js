var purry = require('purry')
var is_plain_object = require('./utils/is-plain-object')

module.exports = purry(map)



// map :: Functor f => (a -> b) -> f a -> f b
function map(f, functor){
  if (functor.map) return functor.map(f)
  if (is_plain_object(functor)) return hash_map(f, functor)
}

function hash_map(f, pojo){
  var _pojo = {}
  for(var k in pojo) {
    if (pojo.hasOwnProperty(k)) {
      _pojo[k] = f(pojo[k], k)
    }
  }
  return _pojo
}