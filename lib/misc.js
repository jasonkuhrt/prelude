var api = {}


// id :: a -> a
// Identity function.

api.id = function(a){ return a }

api.k = api.id // alias for idiomatic combinator logic terminology


// const :: a -> b -> a
// Constant function.
// Note: Only makes sense after being purried.

api.constant = function(a, b){ return a }


// (.) :: (b -> c) -> (a -> b) -> a -> c
// flip :: (a -> b -> c) -> b -> a -> c

// Useful in high-order situations
// ($) :: (a -> b) -> a -> b

// until :: (a -> Bool) -> (a -> a) -> a -> a
// asTypeOf :: a -> a -> a
// each



module.exports = require('./utils/purry-api')(api)