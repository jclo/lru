// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(LRU, libname, version) {
  describe('Test LRU:', () => {
    describe('Test LRU.NAME and LRU.VERSION:', () => {
      it(`Expects LRU.NAME to return the string "${libname}".`, () => {
        expect(LRU.NAME).to.be.a('string').that.is.equal(libname);
      });

      it(`Expects LRU.VERSION to return the string "${version}".`, () => {
        expect(LRU.VERSION).to.be.a('string').that.is.equal(version);
      });
    });

    describe('Test LRU private static methods:', () => {
      it('Expects LRU._setTestMode to be a function.', () => {
        expect(LRU).own.property('_setTestMode').that.is.a('function');
      });

      it('Expects LRU._setTestMode() to return a array with one item.', () => {
        expect(LRU._setTestMode()).to.be.an('array').that.has.lengthOf(1);
      });
    });

    describe('Test LRU public static methods::', () => {
      it('Expects LRU.noConflict to be a function.', () => {
        expect(LRU).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects LRU.noConflict() to return a function.', () => {
        expect(LRU.noConflict()).to.be.a('function');
      });
    });

    describe('Test LRU constructor and generic public methods:', () => {
      const o = LRU();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects LRU() to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects this object to own 2 properties.', () => {
        expect(op).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this object to inherit 10 properties.', () => {
        expect(io).to.be.an('array').that.has.lengthOf(10);
      });

      it('Expects this object to inherit the property "whoami" that is a function.', () => {
        expect(o).to.have.property('whoami').that.is.a('function');
      });

      it('Expects LRU.whoami() to return an object.', () => {
        expect(o.whoami()).to.be.an('object');
      });

      it('Expects this object to own two properties.', () => {
        expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this object to own the property "name".', () => {
        expect(o.whoami()).to.own.property('name').that.is.equal(libname);
      });

      it('Expects this object to own the property "version".', () => {
        expect(o.whoami()).to.own.property('version').that.is.equal(version);
      });
    });

    describe('Test LRU own properties:', () => {
      const jlru = LRU();
      const jlru2 = LRU({ maxItems: 100.1, maxAge: 100.1 });
      const jlru3 = LRU({ maxItems: -1, maxAge: -1 });
      const jlru4 = LRU({ maxItems: -1, maxAge: 99 });

      it('Expects LRU() to return an object.', () => {
        expect(jlru).to.be.an('object');
      });

      it('Expects this object to own the property "db" that is an object.', () => {
        expect(jlru).to.own.property('db').that.is.an('object');
      });

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
};
