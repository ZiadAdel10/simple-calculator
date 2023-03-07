const resultDisplay = document.querySelector(".result-display");
const firstNumberInput = document.querySelector(".input-num-1");
const secondNumberInput = document.querySelector(".input-num-2");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const clear = document.querySelector("#clear");
// const form = document.querySelector("form");

add.addEventListener("click", sum);
minus.addEventListener("click", subtract);
multiply.addEventListener("click", product);
divide.addEventListener("click", division);
clear.addEventListener("click", reset);
// form.preventDefault();

function sum() {
  resultDisplay.innerText =
    Number(firstNumberInput.value) + Number(secondNumberInput.value);
}

function subtract() {
  resultDisplay.innerText =
    Number(firstNumberInput.value) - Number(secondNumberInput.value);
}

function product() {
  resultDisplay.innerText =
    Number(firstNumberInput.value) * Number(secondNumberInput.value);
}

function division() {
  resultDisplay.innerText =
    Number(firstNumberInput.value) / Number(secondNumberInput.value);
}

function reset() {
  resultDisplay.innerText = "";
  firstNumberInput.value = "";
  secondNumberInput.value = "";
}
