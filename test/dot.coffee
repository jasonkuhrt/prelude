a = require('assert')
dot = require('../').dot

eq = a.equal

o =
  a: 'a'
  b: 'b'
  c:
    c1: 'c1'
    c2: 'c2'



describe 'dot', ->

  it 'returns last found value if path lookup partially succeeds and then fails', ->
    eq dot('c.c3', o), o.c

  it 'returns null if given object isn\'t actually an object', ->
    eq dot('foobar', 5), null

  it 'returns null if path lookup totally fails', ->
    eq dot('d', o), o

  it 'path as String', ->
    eq dot('b', o), 'b'

  it 'path as String with keys separated by dots', ->
    eq dot('c.c2', o), 'c2'

  it 'path as [String]', ->
    eq dot(['c', 'c2'], o), 'c2'

  it 'path as empty string', ->
    eq dot('', o), o

  it 'path as empty array', ->
    eq dot([], o), o

  it 'is curried', ->
    eq dot('a')(o), 'a'