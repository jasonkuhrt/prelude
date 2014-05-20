'use strict';



try {
  window.prelude = require('prelude');
} catch (err) {
  global.prelude = require('../../');
}