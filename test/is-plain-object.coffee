f = prelude.isPlainObject;



describe 'is_plain_object', ->

  describe 'returns true', ->

    it 'for null Object.create', ->
      f(Object.create(null)).should.ok

    it 'for constructed Object', ->
      f(new Object()).should.ok
      f(Object()).should.ok

      a = new Object()
      a.foo = 'bar'
      f(a).should.ok

    it 'for object literal', ->
      f({a: 1}).should.ok



  describe 'returns false', ->

    it 'for primitives', ->
      f(null).should.not.ok
      f(true).should.not.ok
      f(undefined).should.not.ok
      f(1).should.not.ok
      f('').should.not.ok
      f('foo').should.not.ok

    it 'for objects with a non Object.prototype prototype', ->
      f(new Date()).should.not.ok
      if (typeof Buffer isnt 'undefined') then f(Buffer(1)).should.not.ok

    it 'for object-literal Object.create', ->
      f(Object.create({})).should.not.ok

    it 'for function "arguments"', ->
      f(arguments).should.not.ok

    it 'for regexp', ->
      f(/foo/).should.not.ok
      f(new RegExp('foo')).should.not.ok

    it 'for functions', ->
      f(->).should.not.ok
      f(new Function()).should.not.ok

    it 'Custom constructed Objects', ->
      `function Foo(){ this.foo = 'bar'; return this; }`
      f(new Foo()).should.not.ok

    it 'Custom constructed Object that mess around with .valueOf', ->
      `function Foo(){ this.valueOf = ''; this.foo = 'bar'; return this; }`
      f(new Foo()).should.not.ok

      `function Foo2(){ this.valueOf = 'a'; this.foo = 'bar'; return this; }`
      f(new Foo2()).should.not.ok