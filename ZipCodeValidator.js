"use strict";
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 8 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
