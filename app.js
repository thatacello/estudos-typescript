var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
// classe implementa uma interface 
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// classes 
var Hello = /** @class */ (function () {
    function Hello(textIn) {
        this.helloText = textIn;
    }
    Hello.prototype.message = function () {
        return "Hello " + this.helloText;
    };
    return Hello;
}());
// herança
var Product = /** @class */ (function () {
    function Product(theName, thePrice) {
        this.name = theName;
        this.price = thePrice;
    }
    Product.prototype.PriceWithDisccount = function (discount) {
        if (discount === void 0) { discount = 0; }
        var priceFinal = this.price - (this.price * discount);
        // alert(this.name + " : $" + priceFinal);
    };
    return Product;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV(name, price, theSize) {
        var _this = _super.call(this, name, price) || this;
        _this.size = theSize;
        return _this;
    }
    TV.prototype.PriceWithDisccountTV = function (discount) {
        // alert("TV size: " + this.size + " pol");
        _super.prototype.PriceWithDisccount.call(this, discount);
    };
    return TV;
}(Product));
// modificadores de acesso 
// public -> default
// private -> tem que ser usado dentro da própria classe
// static -> não pode ser usado na instância da classe (no construtor, por exemplo)
// get and set
// class Person {
//     private personName: string = null;
//     constructor(){
//     }
//     // GET
//     public get name(): string {
//         // podemos acessar o personName (private) fora da classe devido o GET
//         return "Person name is " + this.personName;
//     }
//     // SET
//     public set name(value: string){
//         this.personName = value;
//     }
// }
// // usando GET e SET
// class Main {
//     private personOne: Person = null;
//     constructor(){
//         this.personOne = new Person();
//         // using SET
//         this.personOne.name = "Thais";
//         // using GET
//         alert(this.personOne.name);
//     }
// }
// modules
// está em Validation.ts
window.onload = function () {
    // modules
    var strings = ['Thais', '55555555', '123'];
    var validators = {};
    validators['ZIP CODE'] = new Validation.CepValidator();
    validators['Letters only'] = new Validation.LettersOnlyValidator();
    var resultado = '';
    strings.forEach(function (s) {
        for (var name in validators) {
            resultado = resultado + '"' + s + '" ' + (validators[name].isValidate(s) ? 'matches ' : 'does not match ') + name + "<br>";
        }
    });
    document.getElementById('content19').innerHTML = resultado;
    // get and set
    // var main = new Main();
    // herança
    var myProduct = new Product('Table', 10.00);
    myProduct.PriceWithDisccount(0.2);
    var myTV = new TV('TV HD', 1000.00, 32);
    myTV.PriceWithDisccountTV(0.3);
    // classe Hello
    var myHello = new Hello("world!!!");
    // alert(myHello.message());
    // =======  interfaces extendidas
    var square = {};
    square.color = "blue";
    square.penWidth = 5.0;
    square.sideLength = 10;
    // alert(square.color + " " + square.penWidth + " " + square.sideLength);
    // interfaces
    var mySearch;
    mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    // alert("Result is " + mySearch("Thais Cardoso", "Helena"));
    // interface com array
    var myArray;
    myArray = ["Bob", "Fred"];
    // alert(myArray[1]);
    // sem interface
    function printLabel(labelledObj) {
        // alert(labelledObj.label);
    }
    var myObj = { label: "Size 10 Object" };
    printLabel(myObj);
    // com interface -> não permite remover o "size"
    function printLabelWithInterface(labelledObj) {
        // alert(labelledObj.label);
    }
    var myObjWithInterface = { size: 10, label: "Size 10 Object with interface" };
    printLabelWithInterface(myObjWithInterface);
    // void não retorna nenhum valor, apenas executa uma ação
    function alertUser() {
        // alert("This is an alert message!");
    }
    alertUser();
    // if/else
    // var number1: number = 12;
    // var number2: number = 12;
    // if(number1 == number2){
    //     alert("number1 == number2");
    // }
    // else{
    //     alert("number1 is not iqual number2");
    // }
    // while
    var i = 1;
    var textOut = "";
    while (i < 10) {
        textOut += "(while) The number is " + i + "<br>";
        i++;
    }
    document.getElementById('content').innerHTML = textOut;
    // do while
    var k = 1;
    var textOut2 = "";
    do {
        textOut2 += "(do/while) The number is " + k + "<br>";
        k++;
    } while (k < 10);
    document.getElementById('content2').innerHTML = textOut2;
    // for 
    var y = 1;
    var textOut3 = "";
    for (y = 0; y < 5; y++) {
        textOut3 = textOut3 + "(for) The number is " + y + "<br>";
    }
    document.getElementById('content3').innerHTML = textOut3;
    // for com array 
    var myArray = ["cat", "dog", "bird", "fish", "chicken", "bat"];
    var textOut4 = "";
    for (var c = 0; c < 6; c++) {
        textOut4 += myArray[c] + "<br>";
    }
    document.getElementById('content4').innerHTML = textOut4;
    // for/in 
    var fruits = { name: "apple", color: "red", size: 5 };
    var textOut5 = "";
    for (var f in fruits) {
        textOut5 += fruits[f] + " / ";
    }
    document.getElementById('content5').innerHTML = textOut5;
    // break
    var t;
    var texto = "";
    for (t = 0; t < 10; t++) {
        if (t == 3) {
            break;
        }
        else {
            texto = texto + "(break) O número é " + t + "<br>";
        }
    }
    document.getElementById('content6').innerHTML = texto;
    // continue
    var h;
    var textoContinue = "";
    for (h = 0; h < 10; h++) {
        // vai pular o número 3
        if (h == 3) {
            continue;
        }
        else {
            textoContinue = textoContinue + "(continue) O número é " + h + "<br>";
        }
    }
    document.getElementById('content7').innerHTML = textoContinue;
    // try/catch
    try {
        throw new Error("Erro!");
    }
    catch (error) {
        document.getElementById('content8').innerHTML = "<h1> Eu sou o catch: " + error.message + "</h1>";
    }
    // throw
    function myCheck(myVar) {
        if (myVar == "")
            throw new Error("Empty");
        if (myVar > 100)
            throw new Error("Too High");
        if (myVar < 10)
            throw new Error("Too low");
    }
    try {
        myCheck("");
        alert("OK");
    }
    catch (error) {
        document.getElementById('content9').innerHTML = "<span> Eu sou o catch: " + error.message + "</span>";
    }
    finally {
        var varContent = document.getElementById('content9').innerHTML;
        document.getElementById('content9').innerHTML = varContent + "<br>Hello World FINALLY";
    }
    // function types
    function showMessage(text) {
        document.getElementById('content10').innerHTML = "The message is: " + text;
    }
    showMessage("A Thais é incrível");
    showMessage("A Helena é inteligente");
    // ----------------
    function sumNumbers(x, y) {
        return x + y;
    }
    var resultSum;
    resultSum = sumNumbers(1, 2);
    document.getElementById('content11').innerHTML = "The sum is: " + resultSum;
    // -------------------
    function checkNumberBelowTen(myNumber) {
        if (myNumber < 10) {
            return true;
        }
        else {
            return false;
        }
    }
    document.getElementById('content12').innerHTML = "É menor que 10? " + checkNumberBelowTen(5);
    // ---------------------
    var myAdd = function (x, y) {
        return x + y;
    };
    document.getElementById('content13').innerHTML = "The result of myAdd is " + myAdd(5, 5);
    // -------------
    // a interrogação depois do nome do parâmetro o torna opcional 
    function addNumber(n1, n2, n3) {
        var result;
        if (isNaN(n3)) {
            result = n1 + n2;
        }
        else {
            result = n1 + n2 + n3;
        }
        return result;
    }
    var resultAdd;
    resultAdd = addNumber(3, 2, 5);
    document.getElementById('content14').innerHTML = "The result of addNumber is " + resultAdd;
    // ------------
    function buildName(firstName) {
        var lastName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            lastName[_i - 1] = arguments[_i];
        }
        return firstName + " " + lastName.join(" ");
    }
    var name = buildName("Thais", "Cardoso", "de", "Farias");
    document.getElementById('content14').innerHTML = "The result of buildName is " + name;
    function calculateArea(x, y) {
        var result;
        if (y > 0) {
            result = x * y;
        }
        else {
            result = x * x;
        }
        return result;
    }
    document.getElementById('content15').innerHTML = "The result of calculateArea is " + calculateArea(7);
    // function type/ arrow function
    var resultSum1 = function calculateSum(x, y, z) {
        var result;
        result = x + y + z;
        return result;
    };
    document.getElementById('content16').innerHTML = "The result of calculateArea is " + resultSum1(3, 4, 5);
    // transcrevendo a função acima para arrow function
    var resultSum2 = function (x, y, z) {
        var result;
        result = x + y + z;
        return result;
    };
    document.getElementById('content17').innerHTML = "The result of calculateArea arrow function is " + resultSum2(3, 4, 5);
    // transcrevendo outra vez para arrow function em apenas 1 linha
    var resultSum3 = function (x, y, z) { return x + y + z; };
    document.getElementById('content18').innerHTML = "Arrow function de 1 linha, o resultado é : " + resultSum3(3, 4, 5);
};
