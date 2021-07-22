import validation = require('./Validation2');

var numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements validation.StringValidator2{
    isAcceptable(s: string){
        return s.length === 8 && numberRegexp.test(s);
   }
}

export = ZipCodeValidator;