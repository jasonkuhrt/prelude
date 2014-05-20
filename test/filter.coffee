a = require('assert')
filter = require('../').filter

is_odd = (a)-> a % 2 isnt 0



describe 'filter', ->
  fodd = filter(is_odd)
  arr = [1, 2, 3]
  hash = { a:1, b:2, c:3 }

  it 'is curried', ->
    a typeof fodd is 'function'

  # over arrays

  it 'applies function over each array item', ->
    a.deepEqual fodd(arr), [1, 3]

  it 'does not mutate array', ->
    a.notStrictEqual fodd(arr), arr

  # over hashes

  it 'applies function over each plain object item value', ->
    a.deepEqual fodd(hash), {a: 1, c:3}

  it 'does not mutate plain object', ->
    a.notStrictEqual fodd(hash), hash