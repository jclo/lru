# LRU

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

`LRU` is an in-memory key/value cache that relies on the Least Recently Used algorithm to maintain its size in a predefined limits.

`LRU` runs on both the browser and Node.js.

`LRU` is encapsulated in a module pattern. Only the variable `LRU` is accessible outside the module. Thus, it doesn't pollute the global space.

`LRU` is freely inspired from `node-lru-cache`.


## Quick Startup

You can create your database object by typing:

```javascript
const cache = LRU();
```

There is no need to use the `new` operator as LRU implements the `prototypal instantiation pattern`.

When, your cache is created, you can add a key/value by typing:

```javascript
cache.set('a', { a: 1 });
```

if the key/value is already in the cache, the operation is ignored. But, you can force to update a key/value with the option `force`:

```javascript
cache.set('a', { a: 2 }, { force: true });
```

You can read a key/value, from the cache, by typing:

```javascript
cache.get('a');
```


## API

### The constructor

`LRU` accepts optionals parameters including: `maxItems` and `maxAge`.

By default, `maxItems` is set to `1000`. It can't be lower than `1`.

By default, `maxAge` is set to `1 hour`. It can't be lower than `100ms`.

To set different values, simply do:

```javascript
const cache = LRU({ maxAge: 1000, maxItems: 100000 });
```

### The methods

`LRU` provides the following methods:

  * **set**<br>
    `set(key, value)` stores a new key/value into the cache and returns the added key/value.

    If the key `key` already exists into the cache, `set` returns the stored value.

    You can force to update the value by typing: `set(key, newval, { force: true });`

  * **get**<br>
    `get(key)` returns the key/value stored into the cache. If this key/value doesn't exist, or it has reached its lifetime, `get` returns `null`.

  * **has**<br>
    `has(key)` returns the key/value stored into the cache. If this key/value doesn't exist, or it has reached its lifetime, `has` returns `null`.

  * **remove**<br>
    `remove(key)` returns the key/value stored into the cache and remove it from the cache. If this key/value doesn't exist, or it has reached its lifetime, `remove` returns `null`.

  * **empty**<br>
    `empty()` removes all the key/values from the cache.

  * **dump**<br>
    `dump()` returns an array with all the key(s)/value(s) stored into the cache that haven't exceeded their lifetime.

    The array looks like:

    ```javascript
    [
      { key: 'a', value: 'aaa', age: 100 },
      { key: 'b', value: 'bbb', age: 80 },
      ...
    ]
    ```

    it is ordered from the oldest to the newest key/value.

  * **prune**<br>
    `prune()` removes, from the cache, the key/value pairs that have exceeded their lifetime.

  * **count**<br>
    `count()` returns the number of key(s)/value(s) stored into the cache.

  * **renew**<br>
    `renew(key)` sets to zero the age of a key/value.


## Remove programatically old key/value pairs

By default, a key/value pair that has exceeded its lifetime is removed from the cache only when a method `get` or `has` is performed.

If you want to automatically clean the cache, you have to pass a duration when you create the cache by typing:

```javascript
const cache = LRU({ prune: 2000 });
```

The value is expressed in `milliseconds`. It can be lower that `1000`. In the example above, the `prune` method is processed every 2000ms.


## Embed LRU into your own library

You can easily embed `LRU` into your own library by a simple copy and paste. As said earlier, `LRU` is encapsulated inside a module pattern. It does export only the variable `LRU` in the global space.

If you want to embed, `LRU` inside your library, you just need to copy it and replace `this` at the top of the library by the object you want to attach it:

```javascript
} else {
  // Browser globals.
  /* eslint-disable no-param-reassign */
  root.LRU = factory(root);
  /* eslint-enable no-param-reassign */
}
}(this, function(root) {
'use strict';
```


You don't need `browserify`, `webpack` or so on!


Enjoy!


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/lru.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/@mobilabs/lru.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/lru.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/lru.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/lru/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/lru/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/lru/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/lru.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/lru
[npm-install-url]: https://nodei.co/npm/@mobilabs/lru
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/lru
[travis-url]: https://travis-ci.org/jclo/lru
[coveralls-url]: https://coveralls.io/github/jclo/lru?branch=master
[dependencies-url]: https://david-dm.org/jclo/lru
[devdependencies-url]: https://david-dm.org/jclo/lru?type=dev
[license-url]: http://opensource.org/licenses/MIT


## License

MIT.
