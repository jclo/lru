// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of owned custom properties added by your library,
// number of owned and inherited properties added by your library (instance),
// number of items returned by '_setTestMode'.
const LIBPROPS = 0
    , OWNPROPS = 1
    , INHPROPS = 9
    , TESTMODE = 1
    ;


// -- Local Variables


// -- Main
module.exports = function(LRU, libname, version, type) {
  describe('LRU introspection:', () => {
    describe('Test the nature of LRU:', () => {
      it('Expects LRU to be a function.', () => {
        expect(LRU).to.be.a('function');
      });

      it(`Expects LRU to own ${4 + LIBPROPS} custom properties.`, () => {
        expect(Object.keys(LRU)).to.be.an('array').that.has.lengthOf(4 + LIBPROPS);
      });


      // -- This section must not be modified --
      // NAME, VERSION, _setTestMode, noConflict
      describe('Check the owned generic custom properties:', () => {
        it(`Expects LRU to own the property "NAME" whose value is "${libname}".`, () => {
          expect(LRU).to.own.property('NAME').that.is.equal(libname);
        });

        it(`Expects LRU to own the property "VERSION" whose value is "${version}".`, () => {
          expect(LRU).to.own.property('VERSION');
        });

        it('Expects LRU to own the property "_setTestMode" that is a function.', () => {
          expect(LRU).to.own.property('_setTestMode').that.is.a('function');
        });

        it('Expects LRU to own the property "noConflict" that is a function.', () => {
          expect(LRU).to.own.property('noConflict').that.is.a('function');
        });

        describe('Test the owned generic custom properties:', () => {
          it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
            expect(LRU._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(LRU.noConflict()).to.be.a('function');
          });
        });


        // -- This section must  be adapted --
        // Add here the owned properties added by your library.
        // describe('Check the owned specific custom properties:', () => {
        //   it('Expects LRU to own the property ... to be completed or ... removed!', () => {
        //     expect(true).to.be.equal(true);
        //   });
        //
        //   describe('Test the owned specific custom properties:', () => {
        //     it('Expects LRU the property ... to be completed or ... removed!', () => {
        //       expect(true).to.be.equal(true);
        //     });
        //   });
        // });
      });
    });


    describe('Test LRU constructor:', () => {
      if (type === 'with new') {
        it('Expects LRU() without the operator "new" to throw an error.', () => {
          try {
            LRU();
          } catch (e) {
            expect(e.message).to.be.a('string').that.is.equal('LRU needs to be called with the new keyword!');
          }
        });
      }

      const o = type === 'with new' ? new LRU() : LRU();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function LRU to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it(`Expects LRU object to own ${1 + OWNPROPS} property(ies).`, () => {
        expect(op).to.be.an('array').that.has.lengthOf(1 + OWNPROPS);
      });


      // -- This section must not be modified --
      // _library
      describe('Check the owned generic properties:', () => {
        it('Expects LRU object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o._library)).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o._library).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o._library).to.own.property('version').that.is.equal(version);
          });
        });


        // -- This section must be adapted --
        // Add here the owned properties added by your library.
        describe('Check the owned specific custom properties:', () => {
          it('Expects LRU object to own the property "db" that is an object.', () => {
            expect(o).to.own.property('db').that.is.an('object');
          });

          describe('Test the owned specific properties:', () => {
            const jlru = LRU();
            const jlru2 = LRU({ maxItems: 100.1, maxAge: 100.1 });
            const jlru3 = LRU({ maxItems: -1, maxAge: -1 });
            const jlru4 = LRU({ maxItems: -1, maxAge: 99 });

            it('Expects "db" to own the property "cache" that is an empty object.', () => {
              expect(jlru.db).to.own.property('cache').that.is.an('object').that.is.empty;
            });

            it('Expects "db" to own the property "list" that is an empty object.', () => {
              expect(jlru.db).to.own.property('list').that.is.an('object').that.is.empty;
            });

            it('Expects "db" to own the property "list" that is an empty object.', () => {
              expect(jlru.db).to.own.property('list').that.is.an('object').that.is.empty;
            });

            it('Expects "db" to own the property "lru" that is a number.', () => {
              expect(jlru.db).to.own.property('lru').that.is.an('number').that.is.equal(0);
            });

            it('Expects "db" to own the property "mru" that is a number.', () => {
              expect(jlru.db).to.own.property('mru').that.is.an('number').that.is.equal(0);
            });

            it('Expects "db" to own the property "items" that is a number.', () => {
              expect(jlru.db).to.own.property('items').that.is.an('number').that.is.equal(0);
            });

            it('Expects "db" to own the property "maxItems" that is a number.', () => {
              expect(jlru.db).to.own.property('maxItems').that.is.an('number').that.is.equal(1000);
            });

            it('Expects "db" to own the property "maxAge" that is a number.', () => {
              expect(jlru.db).to.own.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
            });

            it('Expects "maxItems" is an integer.', () => {
              expect(jlru2.db).to.own.property('maxItems').that.is.an('number').that.is.equal(101);
            });

            it('Expects "maxItems" is an integer always greater than 1.', () => {
              expect(jlru3.db).to.own.property('maxItems').that.is.an('number').that.is.equal(1000);
            });

            it('Expects "maxAge" is an integer.', () => {
              expect(jlru2.db).to.own.property('maxAge').that.is.an('number').that.is.equal(101);
            });

            it('Expects "maxAge" is an integer always greater than 100.', () => {
              expect(jlru3.db).to.own.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
            });

            it('Expects "maxAge" is an integer always greater than 100.', () => {
              expect(jlru4.db).to.own.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
            });
          });
        });
      });


      // -- This section must not be modified --
      // whoami
      describe('Check the inherited generic properties:', () => {
        it(`Expects LRU object to inherit ${1 + INHPROPS} property(ies).`, () => {
          expect(io).to.be.an('array').that.has.lengthOf(1 + INHPROPS);
        });

        it('Expects LRU object to inherit the property "whoami" that is a function.', () => {
          expect(o).to.have.property('whoami').that.is.a('function');
        });

        describe('Test the inherited generic properties:', () => {
          it('Expects the property "whoami" to return an object.', () => {
            expect(o.whoami()).to.be.an('object');
          });
          it('Expects this object to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });


      // -- This section must be adapted --
      // Replace here 'getString' and 'getArray' by the inherited properties
      // added by your library.
      describe('Check the inherited specific properties:', () => {
        it('Expects LRU object to inherit the property "set" that is a function.', () => {
          expect(o).to.have.property('set').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "get" that is a function.', () => {
          expect(o).to.have.property('get').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "has" that is a function.', () => {
          expect(o).to.have.property('has').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "remove" that is a function.', () => {
          expect(o).to.have.property('remove').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "empty" that is a function.', () => {
          expect(o).to.have.property('empty').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "dump" that is a function.', () => {
          expect(o).to.have.property('dump').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "prune" that is a function.', () => {
          expect(o).to.have.property('prune').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "count" that is a function.', () => {
          expect(o).to.have.property('count').that.is.a('function');
        });

        it('Expects LRU object to inherit the property "renew" that is a function.', () => {
          expect(o).to.have.property('renew').that.is.a('function');
        });
      });
    });
  });
};
