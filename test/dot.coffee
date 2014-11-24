dot = Prelude.dot

o =
  a: 'a'
  b: 'b'
  c:
    c1: 'c1'
    c2: 'c2'



describe 'dot', ->

  it 'returns undefined even if initial part of path lookup worked', ->
    eq dot('c.c3', o), undefined

  it 'returns null if given object isn\'t actually an object', ->
    eq dot('foobar', 5), null

  it 'returns undefined if path lookup totally fails', ->
    eq dot('d', o), undefined

  it 'returns undefined if a real key has that value', ->
    eq dot('a', { a: undefined }), undefined
    eq dot('a', { a: undefined }), undefined
    eq dot('a.b', { a: { b: undefined } }), undefined

  it 'path as String', ->
    eq dot('b', o), 'b'

  it 'o as null', ->
    eq dot('b', null), undefined

  it 'path as String with keys separated by dots', ->
    eq dot('c.c2', o), 'c2'

  it 'path as [String]', ->
    eq dot(['c', 'c2'], o), 'c2'

  it 'path as empty string', ->
    eq dot('', o), o

  it 'path as empty array', ->
    eq dot([], o), o

  it 'works with functions', ->
    f = ->
    f.a = 1
    eq dot('a', f), 1

  it 'works with non-traditional objects', ->
    eq dot('toString', 1), (1).toString
    eq dot('toString', 'a'), 'a'.toString
    re = /foo/
    eq dot('exec', re), re.exec

  it 'returns null where manual dot access would return undefined', ->
    re = /foo/
    eq dot('match', re), null
    eq re.match, undefined

  it 'is curried', ->
    eq dot('a')(o), 'a'
