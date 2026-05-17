// ESLint declarations:
/* global describe, it */
/* - */


// -- Vendor Modules
import { expect } from 'chai';


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
export default function(LRU) {
  describe('Test automatic prune:', () => {
    it('Expects lru.count() to return the value 5.', () => {
      const lru = LRU({ maxAge: 500, prune: 1000 });
      lru.set('a', 'aaa');
      lru.set('b', 'bbb');
      lru.set('c', 'ccc');
      lru.set('d', 'ddd');
      lru.set('e', 'eee');
      expect(lru.count()).to.be.a('number').that.is.equal(5);
    });

    it('Expects lru.count() called after 1s to return the value 0.', (done) => {
      const lru = LRU({ maxAge: 500, prune: 1000 });
      lru.set('a', 'aaa');
      lru.set('b', 'bbb');
      lru.set('c', 'ccc');
      lru.set('d', 'ddd');
      lru.set('e', 'eee');

      setTimeout(() => {
        expect(lru.count()).to.be.a('number').that.is.equal(0);
        done();
      }, 1020);
    });
  });
};


// - oOo --
