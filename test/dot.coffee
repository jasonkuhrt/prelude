dot = prelude.dot

o =
  a: 'a'
  b: 'b'
  c:
    c1: 'c1'
    c2: 'c2'



describe 'dot', ->

  it 'returns last found value if path lookup partially succeeds and then fails', ->
    dot('c.c3', o).should.eql o.c

  it 'returns null if given object isn\'t actually an object', ->
    (dot('foobar', 5) is null).should.eql true

  it 'returns null if path lookup totally fails', ->
    dot('d', o).should.eql o

  it 'path as String', ->
    dot('b', o).should.eql 'b'

  it 'path as String with keys separated by dots', ->
    dot('c.c2', o).should.eql 'c2'

  it 'path as [String]', ->
    dot(['c', 'c2'], o).should.eql 'c2'

  it 'path as empty string', ->
    dot('', o).should.eql o

  it 'path as empty array', ->
    dot([], o).should.eql o

  it 'is curried', ->
    dot('a')(o).should.eql 'a'