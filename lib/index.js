exports.filter = require('./filter')

exports.map = require('./map')

exports.isPlainObject = require('./utils/is-plain-object');

exports.isTruthy = require('./utils/is-plain-object');

var operators = require('./operators')
for (var fname in operators) exports[fname] = operators[fname]