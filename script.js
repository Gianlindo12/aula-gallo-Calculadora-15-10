!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculadora</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="calculator">
    <div id="display">0</div>
    <div class="buttons">
        <button class="btn" data-value="7">7</button>
        <button class="btn" data-value="8">8</button>
        <button class="btn" data-value="9">9</button>
        <button class="btn operator" data-value="/">/</button>
        <button class="btn" data-value="4">4</button>
        <button class="btn" data-value="5">5</button>
        <button class="btn" data-value="6">6</button>
        <button class="btn operator" data-value="*">X</button>
        <button class="btn" data-value="1">1</button>
        <button class="btn" data-value="2">2</button>
        <button class="btn" data-value="3">3</button>
        <button class="btn operator" data-value="*">-</button>
        <button class="btn" data-value="0">0</button>
        <button class="btn" data-value=".">.</button>
        <button class="btn operator" data-value="clear">AC</button>
        <button class="btn" data-value="*">+</button>
        <button class= "btn"id="calculate">=</button>



    </div>
    </div>
    <script src="script.js"></script>
</body>
</html>



sstyle

body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #000;
        font-family: Arial, sans-serif;

}
.calculator {
    width: 250px;
    background-color: #222;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0.5);
    text-align: center;
}
#display { 
    width: 100%;
    height: 60px;
    background-color: #000;
    color: #fff;
    text-align: right;
    font-size: 2.5rem;
    padding: 10PX;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
}
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;

}
.btn {
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    transition: transform 0.1s, box-shadow 0.1s;
}

.btn:active {
    transform: scale(0.95);
    box-shadow: inset 0 2px 4px rgba(0,0,0.5);
}
.btn.operator {
    background-color: #ff9500;
}

#clear {
    background-color: #a5a5a5;
    color: #000;
}

#calculate {
    grid-column: span 4;
    background-color: #ff9500;
    color: #fff;
}


script.js

const display = document.getElemmentById("display");
const buttons = document.querySelectorA11(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";
let result = 0;
let shoudResetDisplay = false;

buttons.forEach(button => {
    button.addEventListenner("click",()={
        const value =  button.dataset.value;
        if(value){
            if(button.id === "clear") clearDisplay();
            if(button.id ==="calculate") calculate();
            return;
        }
        if(("+", "-", "*", "/").includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function updateDisplay() {
    display.InnerText = currentInput || "0";
}

function appendNumber(number){
    if(currentInput.includes(".") && number === ".") return;
    currentInput += number;
    updateDisplay();
}
 function setOperator(op){
   if (currentInput === "") return;
   operator =op;
   previousInput = currentInput;
   currentInput =""; 
}
 
function clearDisplay(){
    currentInput = "";
    previousInput = "";
    operator ="";
    updateDisplay();
}

function calculate(){
    //alert("calculate");
    if(previousInput === || currentInput ==="") return;
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    //alert(num1 +" " + num2);
    switch (operator) {
        case "+" : result = num1 + num2;break;
        case "-" : result = num1 + num2;break;
        case "*" : result = num1 + num2;break;
        case "/" : result = num1 + num2;break;
        default: return;

    }
    currentInput = result;
    previousInput = "";
    operator = "";
    updateDisplay();
    
}
