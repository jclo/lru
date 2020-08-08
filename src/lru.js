/** **************************************************************************
 *
 * A in-memory key/value database based on the Least Recently Used algorithm.
 *
 * lru.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . startPruneCounter           starts a counter that launches the prune method,
 *  . prune                       checks if the cache must be cleaned up,
 *
 *
 * Constructor:
 *  . LRU                         creates and returns the LRU object,
 *
 *
 * Private Static Methods:
 *  . _setTestMode                returns internal objects for testing purpose,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this LRU object,
 *
 *
 * Public Methods:
 *  . set                         adds a key/value pair to the cache,
 *  . get                         returns a key/value pair from the cache,
 *  . has                         checks if a key/value pair is in the cache,
 *  . remove                      removes a key/value pair from the cache,
 *  . empty                       removes all the key(s)/value(s) pair from the cache,
 *  . dump                        dumps all the key(s)/value(s) pair stored in the cache,
 *  . prune                       removes the too old key/values pairs from the cache,
 *  . count                       returns the number of the stored key/value pairs,
 *  . renew                       sets to zero the age of a stored key/value pair,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global TLRU, root, _ */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // START OF IIFE


  // -- Module Path


  // -- Local Modules
  const Util = TLRU.Util.Public;


  // -- Local Constants
  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  const previousLRU = root.LRU
      ;


  // -- Local Variables
  let methods
    , pruneInterval
    , timeToPrune
    ;

  // -- Private Functions ----------------------------------------------------

  /**
   * Starts the prune counter.
   *
   * @function ()
   * @private
   * @param {}            -,
   * @returns {}          -,
   * @since 0.0.0
   */
  function startPruneCounter() {
    timeToPrune = false;
    setTimeout(() => {
      timeToPrune = true;
    }, pruneInterval);
  }

  /**
   * Starts prune.
   *
   * @function (arg1)
   * @private
   * @param {Object}      the context object,
   * @returns {}          -,
   * @since 0.0.0
   */
  function prune(that) {
    if (pruneInterval && timeToPrune) {
      timeToPrune = false;
      startPruneCounter();
      that.prune();
    }
  }


  // -- Public ---------------------------------------------------------------

  /**
   * Returns the LRU object.
   * (Prototypal Instantiation Pattern)
   *
   * @constructor (arg1)
   * @public
   * @param {String}        the argument to be saved as an object variable,
   * @returns {Object}      returns the LRU object,
   * @since 0.0.0
   */
  /* eslint-disable no-multi-spaces */
  LRU = function(options) {
    const obj = Object.create(methods);
    obj.library = {
      name: '{{lib:name}}',
      version: '{{lib:version}}',
    };

    obj.db = {};

    const { db } = obj;
    db.cache = {};        // contains keys, values,
    db.list = {};         // contains a time stamp and associated key,
    db.lru = 0;           // the least recently used time stamp,
    db.mru = 0;           // the most recently used time stamp,
    db.items = 0;         // the number of key/value pairs stored in the cache,

    // Contains the maximum number of items. Default are 1000.
    // Negative values are ignored. Default value is applied.
    db.maxItems = options && _.isNumber(options.maxItems) && options.maxItems > 0
      ? Math.ceil(options.maxItems)
      : 1000;

    // Contains the maximum age. Default is 1 hour. Values lower than 100 are
    // ignored. Default value is applied.
    db.maxAge = options && _.isNumber(options.maxAge) && options.maxAge >= 100
      ? Math.ceil(options.maxAge)
      : 1000 * 60 * 60;

    pruneInterval = options && _.isNumber(options.prune) && options.prune >= 1000
      ? Math.ceil(options.prune)
      : null;

    if (pruneInterval) {
      startPruneCounter();
    }

    return obj;
  };
  /* eslint-enable no-multi-spaces */

  // Attaches a constant to LRU that provides the version of the lib.
  LRU.VERSION = '{{lib:version}}';


  // -- Private Static Methods -----------------------------------------------

  /**
   * Returns the internal objects for testing purpose.
   *
   * @method ()
   * @private
   * @param {}              -,
   * @returns {Object}      returns a list of internal objects,
   * @since 0.0.0
   */
  LRU._setTestMode = function() {
    return [_];
  };


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this LRU object.
   *
   * Nota:
   * Running LRU in noConflict mode, returns the LRU variable to its
   * _ previous owner.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {Object}      returns the LRU object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  LRU.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.LRU = previousLRU;
    return this;
  };


  // -- Public Methods -------------------------------------------------------

  methods = {

    /**
     * Adds a key/value pair to the cache.
     *
     * Nota:
     * If a key/value pair is already stored in the cache, the optional parameter
     * 'force' must be set to true to overwrite the value of the key.
     *
     * @method (arg1, arg2, arg3)
     * @public
     * @param {String}      the name of the key,
     * @param {Object}      the value of the key (string, number, object, array, etc.),
     * @param {Object}      the optional parameters ({ force: true/false })
     * @returns {Object}    returns the added key/value pair or null,
     * @since 0.0.0
     */
    set(key, value, options) {
      prune(this);
      return _.isString(key) ? Util.set(this.db, key, value, options) : null;
    },

    /**
     * Returns a key/value pair from the cache.
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the key,
     * @returns {Object}    returns the requested key/value pair or null,
     * @since 0.0.0
     */
    get(key) {
      prune(this);
      return _.isString(key) ? Util.get(this.db, key) : null;
    },

    /**
     * Checks if a key/value pair is in the cache.
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the key,
     * @returns {Object}    returns the key/value pair or null,
     * @since 0.0.0
     */
    has(key) {
      prune(this);
      return _.isString(key) ? Util.has(this.db, key) : null;
    },

    /**
     * Removes a key/value pair from the cache.
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the key,
     * @returns {Object}    returns the removed key/value pair or null,
     * @since 0.0.0
     */
    remove(key) {
      prune(this);
      return _.isString(key) ? Util.remove(this.db, key) : null;
    },

    /**
     * Removes all the key(s)/value(s) pair from the cache.
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the key,
     * @returns {}          -,
     * @since 0.0.0
     */
    empty() {
      Util.empty(this.db);
      return this;
    },

    /**
     * Dumps all the key(s)/value(s) pair stored the cache.
     * (ordered from the oldest to the newest)
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Array}     returns the key/value pairs with their age,
     * @since 0.0.0
     */
    dump() {
      prune(this);
      return Util.dump(this.db);
    },

    /**
     * Removes the key/values pairs that exceeded thir lifetime from the cache,
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {}          -,
     * @since 0.0.0
     */
    prune() {
      Util.prune(this.db);
    },

    /**
     * Returns the number of key/value pairs stored into the cache,
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {}          -,
     * @since 0.0.0
     */
    count() {
      prune(this);
      return this.db.items;
    },

    /**
     * Sets to zero the age of a stored key/value pair,
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the key,
     * @returns {Object}    returns the renewed key/value pair,
     * @since 0.0.0
     */
    renew(key) {
      prune(this);
      return _.isString(key) ? Util.renew(this.db, key) : null;
    },
  };

  // END OF IIFE
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
