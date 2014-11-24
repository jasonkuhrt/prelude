exports.isPlainObject = require('./utils/is-plain-object');
exports.isTruthy = require('./utils/is-plain-object');

function _merge(a, b) {
  for (var k in b) a[k] = b[k]
}

_merge(exports, require('./operators'))
_merge(exports, require('./iterables'))
