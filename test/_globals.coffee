{GLOBE, isClient} = require('plat')

GLOBE.a = require('chai').assert
GLOBE.Prelude = if isClient then require('prelude') else require('../lib')
GLOBE.P = Prelude
GLOBE.Immutable = require('immutable')
GLOBE.I = Immutable

GLOBE.List = I.List
GLOBE.Map = I.Map

GLOBE.eq = (n, m)->
  a.deepEqual (n?.toJS?() or n), (m?.toJS?() or m)

GLOBE.neq = (n, m)->
  a.notDeepEqual (n.toJS?() or n), (m.toJS?() or m)
