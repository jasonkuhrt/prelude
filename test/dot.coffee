dot = prelude.dot

o =
  a: 'a'
  b: 'b'
  c:
    c1: 'c1'
    c2: 'c2'



describe 'dot', ->

  it 'returns last found value if path lookup partially succeeds and then fails', ->
    a.equal dot('c.c3', o), o.c

  it 'returns null if given object isn\'t actually an object', ->
    a.equal dot('foobar', 5), null

  it 'returns null if path lookup totally fails', ->
    a.equal dot('d', o), o

  it 'path as String', ->
    a.equal dot('b', o), 'b'

  it 'path as String with keys separated by dots', ->
    a.equal dot('c.c2', o), 'c2'

  it 'path as [String]', ->
    a.equal dot(['c', 'c2'], o), 'c2'

  it 'path as empty string', ->
    a.equal dot('', o), o

  it 'path as empty array', ->
    a.equal dot([], o), o

  it 'is curried', ->
    a.equal dot('a')(o), 'a'