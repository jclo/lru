// ESLint declarations:
/* global describe */
/* - */


// -- Vendor Modules


// -- Local Modules
import LRU from '../index.js';
// import LRU from '../lib/es6lib.mjs';
import pack from '../package.json' with { type: 'json' };
import testlib from './int/lib.js';

import testover from './int/over.js';
import testsetget from './int/setget.js';
import testhasremove from './int/hasremove.js';
import testced from './int/countemptydump.js';
import testrenewprune from './int/renewprune.js';
import testmaxitage from './int/maxitemsage.js';
import testautoprune from './int/autoprune.js';


// -- Local Constants
const libname = 'LRU';


// -- Local Variables


// -- Main
describe('Test LRU:', () => {
  // Test the overslash subset:
  testover(LRU, LRU._setTestMode()[0]);

  // Test the library constructor:
  testlib(LRU, libname, pack.version, 'without new');

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


// - oOo --
