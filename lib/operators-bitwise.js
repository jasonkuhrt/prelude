// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND

var api = {};

api.and = function bitwise_and(a, b){ return a & b }
api.or = function bitwise_or(a, b){ return a | b }
api.xor = function bitwise_xor(a, b){ return a ^ b }
api.not = function bitwise_not(a){ return ~a }
api.shiftl = function bitwise_shiftl(a, b){ return a << b }
api.shiftr_zerofill = function bitwise_shiftr_zerofill(a, b){ return a >> b }
api.shiftr_signprop = function bitwise_shiftr_signprop(a, b){ return a >>> b }



module.exports = require('./utils/purry-api')(api);