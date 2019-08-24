/* ***************************************************************************
 *
 * A micro subset of the Overslash library.
 *
 * _.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . isUndefined                 is a given variable undefined?,
 *  . isNull                      is a given value null?,
 *  . isBoolean                   is a given value a boolean?
 *  . isString                    is a given value a string?
 *  . isNumber                    is a given value a number?
 *  . isNaN                       is a given value NaN?
 *  . isOdd                       is a given value an odd number?
 *
 *
 *
 * @namespace    _
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Public Static Methods ------------------------------------------------

  _ = {

    /**
     * Is a given variable undefined?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isUndefined(obj) {
      return obj === undefined;
    },

    /**
     * Is a given value null?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNull(obj) {
      return obj === null;
    },

    /**
     * Is a given value a boolean?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isBoolean(obj) {
      return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
    },

    /**
     * Is a given value a string?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    },

    /**
     * Is a given value a number?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNumber(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    },

    /**
     * Is a given value NaN?
     * (NaN is the only number which does not equal itself)
     * (copied from: http://underscorejs.org)
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNaN(obj) {
      return this.isNumber(obj) && obj !== +obj;
    },

    /**
     * Is a given value an odd number?
     *
     * @method (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true (odd), false (even) or undefined (not a number),
     * @since 0.0.0
     */
    /* eslint-disable no-void */
    isOdd(obj) {
      const n = obj % 2;
      return obj === parseFloat(obj) ? !!n : void 0;
    },
  };
}());
/* eslint-enable no-underscore-dangle */
