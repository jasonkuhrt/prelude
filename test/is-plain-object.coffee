f = prelude.isPlainObject;



describe 'is_plain_object', ->

  describe 'returns true', ->

    it 'for null Object.create', ->
      a f(Object.create(null))

    it 'for constructed Object', ->
      a f(new Object())
      a f(Object())

      z = new Object()
      z.foo = 'bar'
      a f(z)

    it 'for object literal', ->
      a f({a: 1})



  describe 'returns false', ->

    it 'for primitives', ->
      a.isFalse f(null)
      a.isFalse f(true)
      a.isFalse f(undefined)
      a.isFalse f(1)
      a.isFalse f('')
      a.isFalse f('foo')

    it 'for objects with a non Object.prototype prototype', ->
      a.isFalse f(new Date())
      if (typeof Buffer isnt 'undefined') then a.isFalse f(Buffer(1))

    it 'for object-literal Object.create', ->
      a.isFalse f(Object.create({}))

    it 'for function "arguments"', ->
      a.isFalse f(arguments)

    it 'for regexp', ->
      a.isFalse f(/foo/)
      a.isFalse f(new RegExp('foo'))

    it 'for functions', ->
      a.isFalse f(->)
      a.isFalse f(new Function())

    it 'Custom constructed Objects', ->
      `function Foo(){ this.foo = 'bar'; return this; }`
      a.isFalse f(new Foo())

    it 'Custom constructed Object that mess around with .valueOf', ->
      `function Foo(){ this.valueOf = ''; this.foo = 'bar'; return this; }`
      a.isFalse f(new Foo())

      `function Foo2(){ this.valueOf = 'a'; this.foo = 'bar'; return this; }`
      a.isFalse f(new Foo2())