// 例子
var assert = require('assert');

function add (a, b) {
    return a + b;
}

var expected = add(1,2);
assert( false, '预期1加2等于3');