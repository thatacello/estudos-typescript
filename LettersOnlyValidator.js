"use strict";
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator2 = /** @class */ (function () {
    function LettersOnlyValidator2() {
    }
    LettersOnlyValidator2.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator2;
}());
module.exports = LettersOnlyValidator2;
