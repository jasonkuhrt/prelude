map = Prelude.map



describe 'map()', ->
  add1 = (a)-> a + 1
  madd1 = map(add1)

  it 'is curried', ->
    a.typeOf madd1, 'function'



  describe 'over Array', ->
    arr = [1, 2, 3]

    it 'returns type List', ->
      a I.List.isList madd1(arr)

    it 'applies function over each value', ->
      eq madd1(arr), [2,3,4]



  describe 'over Pojo', ->
    pojo = a:1, b:2, c:3

    it 'returns type Map', ->
      a I.Map.isMap madd1(pojo)

    it 'applies function over each value', ->
      eq madd1(pojo), a:2, b:3, c:4



  describe 'over Hash AKA Map', ->
    hash1 = I.Map a:1, b:2, c:3

    it 'returns type Map', ->
      a I.Map.isMap madd1(hash1)

    it 'applies fn over each value', ->
      eq madd1(hash1), a:2, b:3, c:4



  describe 'over OrderedHash AKA OrderedMap', ->
    oh1 = I.OrderedMap a:1, b:2, c:3

    it 'returns type OrderedMap', ->
      a I.OrderedMap.isOrderedMap madd1(oh1)

    it 'applies fn over each value', ->
      eq madd1(oh1), a:2, b:3, c:4



  describe 'over List', ->
    list1 = I.List.of 1,2,3

    it 'returns type List', ->
      a I.List.isList madd1(list1)

    it 'applies fn over each value', ->
      eq madd1(list1), [2,3,4]



  describe 'over Set', ->
    set1 = I.Set.of(1,2,3)

    it 'returns type Set', ->
      a I.Set.isSet madd1(set1)

    it 'applies fn over each value', ->
      eq madd1(set1), [2,3,4]



  describe 'over OrderedSet', ->
    data = I.OrderedSet.of(1,2,3)

    it 'returns type Set', ->
      a I.OrderedSet.isOrderedSet madd1(data)

    it 'applies fn over each value', ->
      eq madd1(data), [2,3,4]



  describe 'over Custom', ->
    Custom = (value)->
      custom = ->
      custom.value = -> value
      custom.map = (f)-> Custom(f(@value()))
      custom

    it 'applies fn over each value', ->
      eq madd1(Custom(1)).value(), Custom(2).value()
