var purry = require('purry')
var is_plain_object = require('./is-plain-object')

module.exports = purry(rawmap)
module.exports.hashMap = purry(hashMap)



// map :: Functor f => (a -> b) -> f a -> f b
function rawmap(f, functor) {
  if (functor.map) return functor.map(f)
  if (is_plain_object(functor)) return hashMap(f, functor)
}




function hashMap(f, pojo) {
  var _pojo = {}
  for(var k in pojo) {
    if (pojo.hasOwnProperty(k)) {
      _pojo[k] = f(pojo[k], k)
    }
  }
  return _pojo
}
