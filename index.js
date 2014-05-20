'use strict';

var purry = require('purry');
var is_plain_object = require('./lib/utils/is-plain-object');
var is_truthy = require('./lib/utils/is-truthy');



var ops = require('./lib/operators');
for (var k in ops) exports[k] = ops[k];

exports.map = purry(map);
exports.filter = purry(filter);
exports.isPlainObject = is_plain_object;



// map :: Functor f => (a -> b) -> f a -> f b
function map(f, functor){
  if (functor.map) return functor.map(f);
  if (is_plain_object(functor)) return hash_map(f, functor);
}

function hash_map(f, pojo){
  var _pojo = {};
  for(var k in pojo) _pojo[k] = f(pojo[k], k);
  return _pojo;
}

function filter(f, functor){
  if (functor.filter) return functor.filter(f);
  if (is_plain_object(functor)) return hash_filter(f, functor);
}

function hash_filter(f, pojo){
  var _pojo = {};
  for (var k in pojo) {
    if (is_truthy(f(pojo[k], k))) {
      _pojo[k] = pojo[k];
    }
  }
  return _pojo;
}