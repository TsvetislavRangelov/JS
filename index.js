document.getElementById("XOR").onclick = function(){
    let calculate = false;
    var resultText = document.getElementById("result");
    var firstNum = document.getElementById("num1").value;
    var secondNum = document.getElementById("num2").value;

    if(firstNum == 1 || firstNum == 0){
        if(secondNum == 1 || secondNum == 0){
            calculate = true;
            resultText.innerText = "correct Input";

        }
        else{
            calculate = false;
            resultText.innerText = "incorrect Input";
        }
    }
    else{
        calculate = false;
        resultText.innerText = "incorrect Input";
    }

    console.log(parseInt(firstNum));
    console.log(parseInt(secondNum));
}
