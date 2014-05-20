'use strict';

var purry = require('purry');



// TODO:  add type assertions



// Basic Math

exports.mul = purry(mul);
exports.div = purry(div);
exports.add = purry(add);
exports.sub = purry(sub);
exports.mod = purry(mod);
exports.eq = purry(eq);
exports.neq = purry(neq);
exports.eq_ = purry(eq_);
exports.neq_ = purry(neq_);

function mul(a, b){ return a * b; }
function div(a, b){ return a / b; }
function add(a, b){ return a + b; }
function sub(a, b){ return a - b; }
function mod(a, b){ return a % b; }
function eq(a, b){ return a === b; }
function neq(a, b){ return a !== b; }
function eq_(a, b){ return a == b; }
function neq_(a, b){ return a !== b; }



// Relational
// Ignoring for lack of use-cases: in, instanceof

exports.gt = purry(gt);
exports.gte = purry(gte);
exports.lt = purry(lt);
exports.lte = purry(lte);

function gt(a, b){ return a > b; }
function gte(a, b){ return a >= b; }
function lt(a, b){ return a < b; }
function lte(a, b){ return a <= b; }



// Property Access

exports.dot = purry(dot);

// dot :: String a => a -> {*} -> b
// dot :: String a => [a] -> {*} -> b
function dot(path, o){
  var k, v = o;
  if (typeof o !== 'object') return null;

  if (typeof path === 'string') path = path.split('.') ;

  for (var i = 0; i < path.length; i++) {
    k = path[i];
    if (!v.hasOwnProperty(k)) break;
    v = v[k];
  }

  return v;
}



// Logical

exports.not = purry(not);
exports.and = purry(and);
exports.or = purry(or);

function not(a){ return !a; }
function and(a, b){ return a && b; }
function or(a, b){ return a || b; }



// Bitwise TODO:
// <<, >>, >>>, ~