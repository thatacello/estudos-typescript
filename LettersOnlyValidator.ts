import validation = require('./Validation2');

var lettersRegexp = /^[A-Za-z]+$/;

class LettersOnlyValidator2 implements validation.StringValidator2{
    isAcceptable(s: string){
        return lettersRegexp.test(s);
   }
}

export = LettersOnlyValidator2;