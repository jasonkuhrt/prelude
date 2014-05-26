map = prelude.map

add1 = (a)-> a + 1



describe 'map', ->
  mad1 = map(add1)
  arr = [1, 2, 3]
  hash = { a:1, b:2, c:3 }

  it 'is curried', ->
    a.typeOf map(add1), 'function'

  # over arrays

  it 'applies function over each array item', ->
    a.deepEqual mad1(arr), [2,3,4]

  it 'does not mutate array', ->
    a.notDeepEqual mad1(arr), arr

  # over hashes

  it 'applies function over each plain object item value', ->
    a.deepEqual mad1(hash), {a:2, b:3, c:4}

  it 'does not mutate plain object', ->
    a.notDeepEqual mad1(hash), hash