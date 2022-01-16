var counter = 0;

var elementText = document.getElementById("count-el");

function Increment(){
    counter++;
    console.log(counter);
    elementText.innerText = counter;
    
}