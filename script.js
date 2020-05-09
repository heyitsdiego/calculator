const expression = {
  operantA: undefined,
  operator: undefined,
  operantB: undefined,
}

function inputNumber(e) {//DONE for now, later do the comman and only one decimal place
  const number = e.target.innerText;
  currentInputValue = document.getElementById("input").value;
  document.getElementById("input").value = currentInputValue + number;
}

function clear1() {
  document.getElementById("input").value = "";

}

function clear() {
  document.getElementById("input").value = "";
  document.querySelector(".a").innerText= "";
  expression.operantA = undefined;
  expression.operantB = undefined;
  expression.operator = undefined;
}

function equal() {
  document.querySelector(".a").innerText= "";
  const equalValue = operate();
  document.getElementById("input").value = equalValue;
  expression.operantA = undefined;
  expression.operantB = undefined;
  expression.operator = undefined;
}

function operate() {
  expression.operantB = document.getElementById("input").value;
  switch(expression.operator) {
  case "+":
    return Number(expression.operantA) + Number(expression.operantB);
  case "-":
    return Number(expression.operantA) - Number(expression.operantB);
  case "*":
    return Number(expression.operantA) * Number(expression.operantB);
  case "÷":
    return Number(expression.operantA) / Number(expression.operantB);
 }
}

function initializeOperantA(e) {
  // console.log(e);
  if (expression.operantA !== undefined || expression.operator !== undefined) {
    console.log('hi')
    const value = operate();
    document.querySelector(".a").innerText= value;
    expression.operantA = value;
    console.log(e.target.innerText)
    expression.operator = e.target.innerText;
    expression.operantB = undefined;
    clear1();
  }
  else {
  console.log('ji');
  expression.operantA = document.getElementById("input").value;
  expression.operator = e.target.innerText;
  var el = document.querySelector(".a");
  el.innerText = expression.operantA
  clear1();
    }
}

let button = document.querySelectorAll("[data-operation]");
button.forEach(element => {
  element.addEventListener('click', initializeOperantA)
});

let numbers = document.querySelectorAll("[data-number]");
numbers.forEach(element => {
  element.addEventListener('click', inputNumber)
});

let operateButton = document.querySelectorAll("[data-operate]");
operateButton.forEach(element => {
  element.addEventListener('click', equal)
});

let allClear = document.querySelectorAll("[data-all-clear]");
allClear.forEach(element => {
  element.addEventListener('click', clear);
});



