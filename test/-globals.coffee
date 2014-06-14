{GLOBE, isClient} = require('plat')



GLOBE.a = require('chai').assert
GLOBE.eq = GLOBE.a.strictEqual
GLOBE.prelude = if isClient then require('prelude') else require('../lib')