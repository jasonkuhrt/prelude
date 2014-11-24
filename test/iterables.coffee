describe 'iterables', ->

  describe 'head :: [a] -> a || undefined', ->
    {head} = P

    it 'returns first elem of array', ->
      eq head([1]), 1

    it 'returns undefined, if array is empty', ->
      eq head([]), undefined



  describe 'tail :: [a] -> [a]', ->
    {tail} = P

    it 'returns elems of array trailing head', ->
      eq tail([1,2]), [2]

    it 'returns empty array, if array is empty', ->
      eq tail([]), []



  describe 'last :: [a] -> a || undefined', ->
    {last} = P

    it 'returns last elem of array', ->
      eq last([1,2]), 2

    it 'returns undefined, if array is empty', ->
      eq last([]), undefined



  describe 'append :: [a] -> [a] -> [a]', ->
    {append} = P

    it 'concatenates second list to first list', ->
      a = [1,2]; b = [3,4]
      eq append(a)(b), [1,2,3,4]



  describe 'size', ->
    {size} = P

    it 'returns iterable size', ->
      eq size(List([1])), 1
      eq size(List([1,2,3])), 3
      eq size(List()), 0



  describe 'isEmpty', ->
    {isEmpty} = P

    it 'returns false if empty, true otherwise', ->
      a.isFalse isEmpty(List([1]))
      a.isTrue isEmpty(List([]))
      a.isFalse isEmpty(Map({a:1}))
      a.isTrue isEmpty(Map({}))



  describe 'index', ->
    {index} = P

    it 'returns item at index', ->
      eq index(0, List([1])), 1



  describe 'reverse', ->
    {reverse} = P

    it 'reverses iterable', ->
      eq reverse(List([1,2,3])), [3,2,1]



  describe 'filter', ->
    {filter}  = P
    fodd = filter (a)-> a % 2 isnt 0

    it 'is curried', ->
      a.typeOf fodd, 'function'

    it 'applies function over each array item', ->
      eq fodd([1,2,3]), [1,3]

    it 'applies function over each plain object item value', ->
      eq fodd(a:1, b:2, c:3), a:1, c:3
