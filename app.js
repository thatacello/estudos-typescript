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
        textOut5 += fruits[f] + " ";
    }
    document.getElementById('content5').innerHTML = textOut5;
};
