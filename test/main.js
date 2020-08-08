// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Node modules


// -- Local modules
const LRU        = require('../index.js')
    , over       = require('./int/over')
    , core       = require('./int/core')
    , setget     = require('./int/setget')
    , hasremove  = require('./int/hasremove')
    , ced        = require('./int/countemptydump')
    , renewprune = require('./int/renewprune')
    , maxitage   = require('./int/maxitemsage')
    , autoprune  = require('./int/autoprune')
    ;


// -- Local constants


// -- Local variables


// -- Main
describe('Test LRU:', () => {
  const [_] = LRU._setTestMode();

  // Test the overslash subset:
  over(LRU, _);

  // Test the library and its constructor:
  core(LRU);

  // Test set and get:
  setget(LRU);

  // Test has and remove:
  hasremove(LRU);

  // Test the count, empty and dump methods:
  ced(LRU);

  // Test the renew and prune methods:
  renewprune(LRU);

  // Test the cache overflow:
  maxitage(LRU);

  // Test the automatic prune:
  autoprune(LRU);
});
