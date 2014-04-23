
/**
 * Module dependencies.
 * @api private
 */

var index = require('indexof');


/**
 * wedge constructor.
 * 
 * @api public
 */

module.exports = function wedge(obj) {
  var args = [].slice.call(arguments, 1);
  if(obj instanceof Array) {
    return array(obj, args);
  }
  return object(obj, args);
};


/**
 * wedge objects.
 *
 * Slice keys from object and return a new 
 * object with just these keys.
 *
 * Examples:
 *
 *   wedge({
 *     video: true,
 *     audio: false,
 *     right: 'admin'
 *   }, 'video', 'right');
 *   // => { video: true, right: 'admin'}
 *   
 * @param  {Object} obj 
 * @return {Object}
 */

function object(obj, args) {
  var result = {};
  for(var i = 0, l = args.length; i < l; i++) {
    var key = args[i];
    result[key] = obj[key];
  }
  return result;
}


/**
 * wedge arrays.
 *
 * Slice items from array and return a new 
 * array with just these items.
 *
 * Examples:
 *
 *   wedge(['olivier', {
 *     video: true
 *   }, 'bredele'], 0, 2);
 *   // => [{video:true}, 'bredele']
 *   
 * @param  {Array} obj 
 * @return {Array}
 */

function array(obj, args) {
  var result = [];
  for(var i = 0, l = obj.length; i < l; i++) {
    if(index(args, i) > -1) result.push(obj[i]);
  }
  return result;
}