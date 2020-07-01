const calculator = {
  operantA: "",
  operator: "",
  operantB: "",

  appendNumber(number) {
    if (number == "." && currentInput.value.includes(".")) return;
    currentInput.value = currentInput.value + number;
  },

  updateDisplay() {
    previousInput.innerText = calculator.operantA;
    currentInput.value = calculator.operantB;
  },

  initializeExpression(operand) {
    if (currentInput.value == "") return;
    if (calculator.operator !== "") {
      const comptutedExpression = calculator.operate();
      calculator.operantA = comptutedExpression;
      calculator.operator = operand;
      calculator.operantB = "";
    } else {
      calculator.operantA = currentInput.value;
      calculator.operator = operand;
    }
    calculator.updateDisplay();
  },

  delete() {
    currentInput.value = currentInput.value.slice(0, -1);
  },

  allClear() {
    calculator.operantA = "";
    calculator.operantB = "";
    calculator.operator = "";
    calculator.updateDisplay();
  },

  equals() {
    if (calculator.operantA === "" || calculator.operantA === "") return;
    const comptutedExpression = calculator.operate();
    calculator.allClear();
    currentInput.value = comptutedExpression;
  },
  plusMinus() {
    if (currentInput.value.includes("-")) {
      currentInput.value = currentInput.value.slice(
        1,
        currentInput.value.lenght
      );
    } else {
      currentInput.value = "-" + currentInput.value;
    }
  },

  operate() {
    calculator.operantB = currentInput.value;
    switch (calculator.operator) {
      case "+":
        return Number(calculator.operantA) + Number(calculator.operantB);
      case "-":
        return Number(calculator.operantA) - Number(calculator.operantB);
      case "*":
        return Number(calculator.operantA) * Number(calculator.operantB);
      case "÷":
        return Number(calculator.operantA) / Number(calculator.operantB);
    }
  },
};

const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const operateButton = document.querySelector("[data-operate]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const currentInput = document.getElementById("current-input");
const previousInput = document.querySelector(".previous-input");
const plusMinus = document.querySelector("[data-plus-minus]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.initializeExpression(button.innerText);
  });
});
operateButton.addEventListener("click", calculator.equals);
allClearButton.addEventListener("click", calculator.allClear);
deleteButton.addEventListener("click", calculator.delete);
plusMinus.addEventListener("click", calculator.plusMinus);
