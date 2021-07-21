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
};