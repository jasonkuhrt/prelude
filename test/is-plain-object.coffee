assert = require('assert')
f = require('../lib/utils/is-plain-object')



describe 'is_plain_object', ->

  describe 'returns true', ->

    it 'for null Object.create', ->
      assert f(Object.create(null))

    it 'for constructed Object', ->
      assert f(new Object())
      assert f(Object())

      a = new Object()
      a.foo = 'bar'
      assert f(a)

    it 'for object literal', ->
      assert f({a: 1})



  describe 'returns false', ->

    it 'for primitives', ->
      assert !f(null)
      assert !f(true)
      assert !f(undefined)
      assert !f(1)
      assert !f('')
      assert !f('foo')

    it 'for objects with a non Object.prototype prototype', ->
      assert !f(new Date())
      assert !f(Buffer(1))

    it 'for object-literal Object.create', ->
      assert !f(Object.create({}))

    it 'for function "arguments"', ->
      assert !f(arguments)

    it 'for regexp', ->
      assert !f(/foo/)
      assert !f(new RegExp('foo'))

    it 'for functions', ->
      assert !f(->)
      assert !f(new Function())

    it 'Custom constructed Objects', ->
      `function Foo(){ this.foo = 'bar'; return this; }`
      assert !f(new Foo())

    it 'Custom constructed Object that mess around with .valueOf', ->
      `function Foo(){ this.valueOf = ''; this.foo = 'bar'; return this; }`
      assert !f(new Foo())

      `function Foo2(){ this.valueOf = 'a'; this.foo = 'bar'; return this; }`
      assert !f(new Foo2())

