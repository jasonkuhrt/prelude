var I = require('immutable')
var toI = I.fromJS



var api = {}



// filter :: (a -> Bool) -> [a] -> [a]

api.filter = function filter(f, functor) {
  return I.Iterable.isIterable(functor)
      || (!Array.isArray(functor) && typeof functor.filter === 'function')
      ? functor.filter(f)
      : toI(functor).filter(f)
}



// map :: Functor f => (a -> b) -> f a -> f b

api.map = function map(f, functor) {
  return I.Iterable.isIterable(functor)
      || (!Array.isArray(functor) && typeof functor === 'object' && typeof functor.map === 'function')
      ? functor.map(f)
      : toI(functor).map(f)
}


// List Operations

// head :: [a] -> a || undefined
// Extract the first element of a array, which may be empty.

api.head = function(a) {
  return toI(a).first()
}



// last :: [a] -> a || undefined
// Extract the last element of a list, which may be empty.

api.last = function(a) {
  return toI(a).last()
}



// tail :: [a] -> [a]
// Extract elements after list head. The extraction result may be an empty list.

api.rest = function(a) {
  return toI(a).rest()
}

// Aliases

api.tail = api.rest



// init :: [a] -> [a]
// Return all the elements of a list except the last one. The list may be empty.

api.butLast = function(a) {
  return toI(a).butLast()
}

// Aliases

api.init = api.butLast



// append :: [a] -> [a] -> [a]
// Join list b to the end of list a
api.append = function(a, b) {
  return toI(a).concat(b)
}



// isEmpty :: [a] -> Bool
// Test whether a list is empty.

api.isEmpty = function(a) {
  return !toI(a).size
}



// size :: [a] -> Int
// Return the length of the list.

api.size = function(a) {
  return toI(a).size
}

// Aliases

api.length = api.size



// index :: Int -> [a] -> a
// Return value at array index

// Note: this deviates from Haskell Prelude which opts
// for iterable first

api.index = function(index, a) {
  return toI(a).get(index)
}



// reverse :: [a] -> [a]
// Reverse the values in the list.

api.reverse = function(a) {
  return toI(a).reverse()
}



// Folding lists

// foldl :: (b -> a -> b) -> b -> [a] -> b
// foldl1 :: (a -> a -> a) -> [a] -> a
// foldr :: (b -> a -> b) -> b -> [a] -> b
// foldr1 :: (a -> a -> a) -> [a] -> a



// Special folds

// and :: [Bool] -> Bool
// or :: [Bool] -> Bool
// any :: (a -> Bool) -> [a] -> Bool
// all :: (a -> Bool) -> [a] -> Bool
// sum
// product
// concat
// concatMap
// maximum
// minimum



// Building lists

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
// scanl1 :: (a -> a -> a) -> [a] -> [a]
// scanr :: (b -> a -> b) -> b -> [a] -> [b]
// scanr1 :: (a -> a -> a) -> [a] -> [a]
// repeat (impossible? requires infinite data structures via lazy evaluation)
// replicate :: Int -> b -> [b]
// cycle (impossible? requires infinite data structures via lazy evaluation; see recycle as possible alternative)
// recycle :: Int -> [b] -> [b]

// Sublists

// take :: Int -> [a] -> [a]
// drop :: Int -> [a] -> [a]
// splitAt :: Int -> [a] -> ([a], [a])
// takeWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (a -> Bool) -> [a] -> [a]
// span :: (a -> Bool) -> [a] -> ([a], [a])
// break :: (a -> Bool) -> [a] -> ([a], [a])

// Searching lists

// elem :: Eq a => a -> [a] -> Bool
// notElem :: Eq a => a -> [a] -> Bool

// lookup :: Eq a => a -> [(a, b)] -> Maybe b
// ? lookup :: Eq a => a -> {a: b} -> Maybe b



// Zipping and Unzipping

// zip :: [a] -> [b] -> [(a, b)]
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
// unzip :: [(a, b)] -> ([a], [b])
// unzip3 :: [(a, b, c)] -> ([a], [b], [c])



// Functions on strings

// lines :: String -> [String]
// words :: String -> [String]
// unlines :: [String] -> String
// unwords :: [String] -> String



module.exports = require('./utils/purry-api')(api)
