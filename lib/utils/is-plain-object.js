'use strict';

var getPrototypeOf = Object.getPrototypeOf;

module.exports = is_plain_object;

function is_plain_object(a){

  /*Week out 0, false, null, undefined, '' given
  that we know plain objects are truthy.*/
  if (!a) return false;

  /* Weed out /foo/, Boolean(), Array(), Function() etc. given
  that 'Object' is in the plain-objects's prototype toString
  result.*/
  if (Object.prototype.toString.call(a) !== '[object Object]') return false;

  /* Weed out results from nodejs Buffer(x),
  custom constructed objects, etc. given that ...
  TODO explain???*/
  var prototype_of_a;
  if (isNative(a.valueOf)) {
    prototype_of_a = getPrototypeOf(getPrototypeOf(a.valueOf));
    return getPrototypeOf(a) === prototype_of_a;
  }

  /* Weed out custom constructed objects that have
  .valueOf customized somehow. */
  // TODO: Better explain this chunk of code
  var ctor = a.constructor;
  if (typeof ctor === 'function' && !(ctor instanceof ctor)) return false;


  /* At this point we must be dealing with *some kind of object*.
  Only known case to reach here is result of Object.create(null).

  TODO: rephrase the following paragraph:
  In most environments an object's own properties are iterated before
  its inherited properties. This makes the last iterated property valuable
  here referred to as "result". If "result" is "undefined" or "result" is
  object's *own property* then object has no inherited enumerable properties.*/
  var result; for (var key in a) result = key;
  return typeof result === 'undefined' ||
         Object.prototype.hasOwnProperty.call(a, result);
}




function isNative(a) {
  return typeof a == 'function' && reNative.test(a);
}

var reNative = RegExp('^' +
  String(Object.prototype.toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);
