wedge
=====

  Slice utility which returns a shallow copy of a portion of an object or array.


## Installation

  Install with [component(](http://component.io):

    $ component install bredele/wedge

  Install with [nodejs)](http://nodejs.org):

    $ npm install wedge


## Wedge objects

  You can choose to slice a pair key/value into an object:

```js
var wedge = require('wedge');
var obj = {
	video: true,
	right: 'admin',
	audio: {
	  rate: 100
  }
};

wedge(obj, 'video');
// => { video: true }
```

  or multiple

```js
wedge(obj, 'right', 'audio');
// => { right: 'admin', audio : { rate : 100 }}
```

## Wedge arrays

  Wedge is different than an array [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). You choose the items you want to slice instead defining a beginning and/or an end.

```js
var wedge = require('wedge');
var arr = [
  'olivier',
  {
    audio: true
  },
  'bredele'
];

wedge(arr, 0);
// => ['olivier']
```

  or multiple

```js
wedge(arr, 0, 2);
// => ['olivier', 'bredele']
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <Olivier Wietrich> olivier.wietrich@gmail.com

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.