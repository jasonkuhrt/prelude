'use strict';



try {
  window.prelude = require('prelude');
  window.a = require('chai').assert;
} catch (err) {
  console.log(err);
  global.prelude = require('../../');
  global.a = require('chai').assert;
}