
/**
 * Test dependencies.
 */

var assert = require('assert');
var wedge = require('..');

describe("slice", function() {
	
	describe('object', function() {
		var obj = {
			video: true,
			audio: {
				options: [],
				constraints: {}
			}
		};

		it('should slice a key', function() {
			var video = wedge(obj, 'video');
			var audio = wedge(obj, 'audio');

			assert.equal(video, true);
			assert.deepEqual(audio, {
				options: [],
				constraints: {}
			});
		});
		
	});

	describe('array', function() {

	});
});
