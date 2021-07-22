class Fruits {
    name: string;
    color: string;
    size: number;
}

interface LabelledValue {
    label: string;
    size: number;
}

interface SearchConf {
    (source: string, subString: string): boolean;
}

interface StringArray {
    [index: number]: string;
}

interface ClockInterface{
    currentTime: Date;
    setTime(d: Date);
}
// classe implementa uma interface 
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m:number){}
}

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
// interface que extende de outras interfaces
interface Square extends Shape, PenStroke {
    sideLength: number;
}

// classes 
class Hello {
    helloText: string;
    constructor(textIn: string){
        this.helloText = textIn;
    }
    message(): string {
        return "Hello " + this.helloText;
    }
}

// herança
class Product {
    name: string;
    price: number;
    constructor(theName: string, thePrice: number){
        this.name = theName;
        this.price = thePrice;
    }

    PriceWithDisccount(discount: number = 0){
        var priceFinal: number = this.price - (this.price * discount);
        // alert(this.name + " : $" + priceFinal);
    }
}

class TV extends Product {
    size: number;

    constructor(name: string, price: number, theSize: number){
        super(name, price);
        this.size = theSize;
    }

    PriceWithDisccountTV(discount: number){
        // alert("TV size: " + this.size + " pol");
        super.PriceWithDisccount(discount);
    }
}

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

// modules -> separar os arquivos
// está em Validation.ts

//modulos externos
// import validation2 = require('./Validation2');
// import zipValidator = require('./ZipCodeValidator');
// import letterValidator = require('./LettersOnlyValidator');

// função genérica -> retorna o valor que eu especificar depois
function echo<T>(arg: T): T {
    return arg;
}

window.onload = () => {
    // usando a função genérica
    document.getElementById('content21').innerHTML = echo<string>("Hello World");

    // modulos externos
    // var strings = ['Helena', '8888888888', '321'];
    // var validators2:{[s: string]: validation2.StringValidator2} = {};

    // validators2['ZIP CODE'] = new zipValidator();
    // validators2['Letters only'] = new letterValidator();

    // var resultado: string = '';
    // strings.forEach(s => { for (var name in validators2) {
    //     resultado = resultado + '"' + s + '" ' + (validators2[name].isAcceptable(s) ? 'matches ' : 'does not match ') + name + "<br>"
    //     } 
    // });

    // document.getElementById('content20').innerHTML = resultado;

    // modules (Validation.ts)
    // var strings = ['Thais', '55555555', '123'];
    // var validators:{[s: string]: Validation.StringValidator} = {};

    // validators['ZIP CODE'] = new Validation.CepValidator();
    // validators['Letters only'] = new Validation.LettersOnlyValidator();

    // var resultado: string = '';
    // strings.forEach(s => { for (var name in validators) {
    //     resultado = resultado + '"' + s + '" ' + (validators[name].isValidate(s) ? 'matches ' : 'does not match ') + name + "<br>"
    //     } 
    // });

    // document.getElementById('content19').innerHTML = resultado;

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
    var square = <Square>{};
    square.color = "blue";
    square.penWidth = 5.0;
    square.sideLength = 10;
    // alert(square.color + " " + square.penWidth + " " + square.sideLength);

    // interfaces
    var mySearch: SearchConf;
    mySearch = function (src: string, sub: string) {
        var result = src.search(sub);
        if(result == -1) {
            return false;
        }
        else {
            return true;
        }
    }
    // alert("Result is " + mySearch("Thais Cardoso", "Helena"));

    // interface com array
    var myArray: StringArray;
    myArray = ["Bob", "Fred"];
    // alert(myArray[1]);

    // sem interface
    function printLabel(labelledObj: {label: string}) {
        // alert(labelledObj.label);
    }
    var myObj = { label: "Size 10 Object"};
    printLabel(myObj);

    // com interface -> não permite remover o "size"
    function printLabelWithInterface(labelledObj: {label: string}) {
        // alert(labelledObj.label);
    }
    var myObjWithInterface = { size: 10, label: "Size 10 Object with interface"};
    printLabelWithInterface(myObjWithInterface);

    // void não retorna nenhum valor, apenas executa uma ação
    function alertUser(): void {
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
    var i: number = 1;
    var textOut: string = "";

    while(i < 10){
        textOut += "(while) The number is " + i + "<br>";
        i++;
    }
    document.getElementById('content').innerHTML = textOut;

    // do while
    var k: number = 1;
    var textOut2: string = "";

    do {
        textOut2 += "(do/while) The number is " + k + "<br>";
        k++;
    }
    while (k < 10)
    document.getElementById('content2').innerHTML = textOut2;

    // for 
    var y: number = 1;
    var textOut3: string = "";

    for(y = 0; y < 5; y++){
        textOut3 = textOut3 + "(for) The number is " + y + "<br>";
    }
    document.getElementById('content3').innerHTML = textOut3;

    // for com array 
    var myArray: StringArray = ["cat", "dog", "bird", "fish", "chicken", "bat"];
    var textOut4: string = "";

    for (var c: number = 0; c < 6; c++){
        textOut4 += myArray[c] + "<br>";
    }
    document.getElementById('content4').innerHTML = textOut4;

    // for/in 
    var fruits: Fruits = {name: "apple", color: "red", size: 5};
    var textOut5: string = "";

    for(var f in fruits){
        textOut5 += fruits[f] + " / ";
    }
    document.getElementById('content5').innerHTML = textOut5;

    // break
    var t: number;
    var texto: string = "";

    for(t = 0; t < 10; t++){
        if(t == 3){
            break;
        }
        else{
            texto = texto + "(break) O número é " + t + "<br>";
        }
    }
    document.getElementById('content6').innerHTML = texto;

    // continue
    var h: number;
    var textoContinue: string = "";

    for(h = 0; h < 10; h++){
        // vai pular o número 3
        if(h == 3){
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
    } catch (error) {
        document.getElementById('content8').innerHTML = "<h1> Eu sou o catch: " + error.message + "</h1>";
    }

    // throw
    function myCheck(myVar: any){
        if(myVar == "") throw new Error("Empty");
        if(myVar > 100) throw new Error("Too High");
        if(myVar < 10) throw new Error("Too low");
    }

    try {
        myCheck("");
        alert("OK");
    } catch (error) {
        document.getElementById('content9').innerHTML = "<span> Eu sou o catch: " + error.message + "</span>";
    } finally {
        var varContent: string = document.getElementById('content9').innerHTML;
        document.getElementById('content9').innerHTML = varContent + "<br>Hello World FINALLY";
    }

    // function types
    function showMessage(text: string){
        document.getElementById('content10').innerHTML = "The message is: " + text;
    }
    showMessage("A Thais é incrível");
    showMessage("A Helena é inteligente");

    // ----------------
    function sumNumbers(x: number, y:number): number{
        return x + y;
    }
    var resultSum: number;
    resultSum = sumNumbers(1, 2);
    document.getElementById('content11').innerHTML = "The sum is: " + resultSum;

    // -------------------
    function checkNumberBelowTen(myNumber: number): boolean {
        if(myNumber < 10){
            return true;
        }
        else{
            return false;
        }
    }
    document.getElementById('content12').innerHTML = "É menor que 10? " + checkNumberBelowTen(5);

    // ---------------------
    var myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
        return x + y;
    }
    document.getElementById('content13').innerHTML = "The result of myAdd is " + myAdd(5, 5);

    // -------------
    // a interrogação depois do nome do parâmetro o torna opcional 
    function addNumber(n1: number, n2:number, n3?:number): number {
        var result: number;

        if(isNaN(n3)){
            result = n1 + n2;
        }
        else {
            result = n1 + n2 + n3;
        }
        return result;
    }
    var resultAdd: number;
    resultAdd = addNumber(3, 2, 5);
    document.getElementById('content14').innerHTML = "The result of addNumber is " + resultAdd;

    // ------------
    function buildName(firstName: string, ...lastName: string[]){
        return firstName + " " + lastName.join(" ");
    }
    var name = buildName("Thais", "Cardoso", "de", "Farias");
    document.getElementById('content14').innerHTML = "The result of buildName is " + name;

    // sobrecarga de funções
    function calculateArea(x: number): number;
    function calculateArea(x: number, y: number): number;
    function calculateArea(x: number, y?: number): any{
        var result: number;
        if(y > 0){
            result = x * y;
        }else {
            result = x * x;
        }
        return result;
    }
    document.getElementById('content15').innerHTML = "The result of calculateArea is " + calculateArea(7);

    // function type/ arrow function
    var resultSum1 = function calculateSum(x: number, y: number, z: number): number {
        var result;
        result = x + y + z;
        return result;
    }
    document.getElementById('content16').innerHTML = "The result of calculateArea is " + resultSum1(3, 4, 5);

    // transcrevendo a função acima para arrow function
    var resultSum2 = (x: number, y: number, z: number) => {
        var result;
        result = x + y + z;
        return result;
    }
    document.getElementById('content17').innerHTML = "The result of calculateArea arrow function is " + resultSum2(3, 4, 5);

    // transcrevendo outra vez para arrow function em apenas 1 linha
    var resultSum3 = (x: number, y:number, z: number) => x + y + z;
    document.getElementById('content18').innerHTML = "Arrow function de 1 linha, o resultado é : " + resultSum3(3, 4, 5);


    
};