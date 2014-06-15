map = prelude.map

add1 = (a)-> a + 1



describe 'map', ->

  madd1 = map(add1)
  arr = [1, 2, 3]
  hash = { a:1, b:2, c:3 }

  it 'is curried', ->
    a.typeOf map(add1), 'function'

  describe 'over arrays', ->

    it 'applies function over each value', ->
      a.deepEqual madd1(arr), [2,3,4]

    it 'does not mutate', ->
      a.notDeepEqual madd1(arr), arr

  describe 'over plain objects', ->

    it 'applies function over each value', ->
      a.deepEqual madd1(hash), {a:2, b:3, c:4}

    it 'does not mutate', ->
      a.notDeepEqual madd1(hash), hash