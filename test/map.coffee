console.log(window.prelude)
map = prelude.map

add1 = (a)-> a + 1



describe 'map', ->
  mad1 = map(add1)
  arr = [1, 2, 3]
  hash = { a:1, b:2, c:3 }

  it 'is curried', ->
    (typeof map(add1)).should.equal 'function'

  # over arrays

  it 'applies function over each array item', ->
    mad1(arr).should.eql [2,3,4]

  it 'does not mutate array', ->
    mad1(arr).should.not.eql arr

  # over hashes

  it 'applies function over each plain object item value', ->
    mad1(hash).should.eql {a:2, b:3, c:4}

  it 'does not mutate plain object', ->
    mad1(hash).should.not.eql hash