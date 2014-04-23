
/**
 * Module dependencies.
 * @api private
 */

var index = require('indexof');


/**
 * wedge constructor.
 * @api public
 */

module.exports = function wedge(obj) {
	var args = [].slice.call(arguments, 1);
	if(obj instanceof Array) {
		return array(obj, args);
	} else {
		return object(obj, args);
	}
};

function object(obj, args) {
	var result = {};
	for(var i = 0, l = args.length; i < l; i++) {
		var key = args[i];
		result[key] = obj[key]; 
	}
	return result;
}


function array(obj, args) {
	var result = [];
	for(var i = 0, l = obj.length; i < l; i++) {
		if(index(args, i) > -1) result.push(obj[i]);
	}
	return result;
}