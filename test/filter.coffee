filter = prelude.filter

is_odd = (a)-> a % 2 isnt 0



describe 'filter', ->
  fodd = filter(is_odd)
  arr = [1, 2, 3]
  hash = { a:1, b:2, c:3 }

  it 'is curried', ->
    (typeof fodd).should.eql 'function'

  # over arrays

  it 'applies function over each array item', ->
    fodd(arr).should.eql [1, 3]

  it 'does not mutate array', ->
    fodd(arr).should.not.eql arr

  # over hashes

  it 'applies function over each plain object item value', ->
    fodd(hash).should.eql {a: 1, c:3}

  it 'does not mutate plain object', ->
    fodd(hash).should.not.eql hash