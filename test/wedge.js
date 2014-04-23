
/**
 * Test dependencies.
 */

var assert = require('assert');
var wedge = require('..');

describe("slice", function() {
  
  describe('object', function() {
    var obj = {
      video: true,
      right: 'admin',
      audio: {
        options: [],
        constraints: {}
      }
    };

    it('should slice a key', function() {
      var video = wedge(obj, 'video');
      var audio = wedge(obj, 'audio');

      // return an object of same type in order
      // to be consistent with array slice
      assert.deepEqual(video, {
        video: true
      });
      assert.deepEqual(audio, {
        audio: {
          options: [],
          constraints: {}
        }
      });
    });

    it('should slice multiple keys', function() {
      var result = wedge(obj, 'video', 'right');
      assert.deepEqual(result, {
        video: true,
        right: 'admin'
      });
    });
    
  });

  describe('array', function() {
    var arr = ['olivier', {
      video: true
    }, 'bredele'];

    it('should slice an item', function() {
      var name = wedge(arr, 0);
      var config = wedge(arr, 1);

      // return an object of same type in order
      // to be consistent with array slice
      assert.deepEqual(name, ['olivier']);
      assert.deepEqual(config, [{
        video: true
      }]);
    });

    it('should slice multiple items', function() {
      var result = wedge(arr, 1, 2);
      assert.deepEqual(result, [{
        video: true
      }, 'bredele']);
    });
  });
});
