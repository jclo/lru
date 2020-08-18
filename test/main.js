// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const LRU            = require('../index.js')
    , pack           = require('../package.json')
    , testlib        = require('./int/lib')

    , testover       = require('./int/over')
    , testsetget     = require('./int/setget')
    , testhasremove  = require('./int/hasremove')
    , testced        = require('./int/countemptydump')
    , testrenewprune = require('./int/renewprune')
    , testmaxitage   = require('./int/maxitemsage')
    , testautoprune  = require('./int/autoprune')
    ;


// -- Local Constants
const libname = 'LRU';


// -- Local Variables


// -- Main
describe('Test LRU:', () => {
  // Test the overslash subset:
  testover(LRU, LRU._setTestMode()[0]);

  // Test the library constructor:
  testlib(LRU, libname, pack.version);

  // Test set and get:
  testsetget(LRU);

  // Test has and remove:
  testhasremove(LRU);

  // Test the count, empty and dump methods:
  testced(LRU);

  // Test the renew and prune methods:
  testrenewprune(LRU);

  // Test the cache overflow:
  testmaxitage(LRU);

  // Test the automatic prune:
  testautoprune(LRU);
});
