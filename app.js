var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    // void não retorna nenhum valor, apenas executa uma ação
    // function alertUser(): void {
    //     alert("This is an alert message!");
    // }
    // alertUser();
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
};
