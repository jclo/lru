// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-unused-expressions: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules
const LRU = require('../../index.js')
    ;


// -- Local constants


// -- Local variables


// -- Main
module.exports = () => {
  describe('Test the JRU library:', () => {
    // Test the lib:
    describe('Test LRU.VERSION and LRU.noConflict:', () => {
      it('Expects LRU.VERSION to return a string.', () => {
        expect(LRU.VERSION).to.be.a('string');
      });
      it('Expects LRU.noConflict to return a function.', () => {
        expect(LRU.noConflict).to.be.a('function');
      });
    });

    // Constructor:
    describe('Test LRU constructor:', () => {
      const jlru = LRU();
      const jlru2 = LRU({ maxItems: 100.1, maxAge: 100.1 });
      const jlru3 = LRU({ maxItems: -1, maxAge: -1 });
      const jlru4 = LRU({ maxItems: -1, maxAge: 99 });

      it('Expects LRU() to return an object.', () => {
        expect(jlru).to.be.an('object');
      });

      it('Expects this object to own the property "db" that is an object.', () => {
        expect(jlru).to.have.property('db').that.is.an('object');
      });

      it('Expects "db" to own the property "cache" that is an empty object.', () => {
        expect(jlru.db).to.have.property('cache').that.is.an('object').that.is.empty;
      });

      it('Expects "db" to own the property "list" that is an empty object.', () => {
        expect(jlru.db).to.have.property('list').that.is.an('object').that.is.empty;
      });

      it('Expects "db" to own the property "list" that is an empty object.', () => {
        expect(jlru.db).to.have.property('list').that.is.an('object').that.is.empty;
      });

      it('Expects "db" to own the property "lru" that is a number.', () => {
        expect(jlru.db).to.have.property('lru').that.is.an('number').that.is.equal(0);
      });

      it('Expects "db" to own the property "mru" that is a number.', () => {
        expect(jlru.db).to.have.property('mru').that.is.an('number').that.is.equal(0);
      });

      it('Expects "db" to own the property "items" that is a number.', () => {
        expect(jlru.db).to.have.property('items').that.is.an('number').that.is.equal(0);
      });

      it('Expects "db" to own the property "maxItems" that is a number.', () => {
        expect(jlru.db).to.have.property('maxItems').that.is.an('number').that.is.equal(1000);
      });

      it('Expects "db" to own the property "maxAge" that is a number.', () => {
        expect(jlru.db).to.have.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
      });

      it('Expects "maxItems" is an integer.', () => {
        expect(jlru2.db).to.have.property('maxItems').that.is.an('number').that.is.equal(101);
      });

      it('Expects "maxItems" is an integer always greater than 1.', () => {
        expect(jlru3.db).to.have.property('maxItems').that.is.an('number').that.is.equal(1000);
      });

      it('Expects "maxAge" is an integer.', () => {
        expect(jlru2.db).to.have.property('maxAge').that.is.an('number').that.is.equal(101);
      });

      it('Expects "maxAge" is an integer always greater than 100.', () => {
        expect(jlru3.db).to.have.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
      });

      it('Expects "maxAge" is an integer always greater than 100.', () => {
        expect(jlru4.db).to.have.property('maxAge').that.is.an('number').that.is.equal(1000 * 60 * 60);
      });
    });
  });
};
