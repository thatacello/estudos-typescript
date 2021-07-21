class Fruits {
    name: string;
    color: string;
    size: number;
}
window.onload = () => {
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
    var myArray: string[] = ["cat", "dog", "bird", "fish", "chicken", "bat"];
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

    // arrow function 
    



};