
/**
 * wedge constructor.
 * @api public
 */

module.exports = function wedge(obj) {
	var result = {};
	var args = [].slice.call(arguments, 1);

	for(var i = 0, l = args.length; i < l; i++) {
		var key = args[i];
		result[key] = obj[key]; 
	}
	return result;
};
