const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector('#clearButton');
const baseSalary = document.querySelector("#num1");
const bonus = document.querySelector("#num2");
const messageBox = document.querySelector("#messageBox");

const totalEarnings = (baseSalary, bonus) => {
  return baseSalary + bonus;
}

const messageHandler = (message) => {
  messageBox.innerText = message;
}

const resetValues = () => {
  baseSalary.value = '';
  bonus.value = '';
  messageHandler('');
}

addButton.addEventListener("click", () => {
  debugger
  const earnings = totalEarnings(baseSalary.value, bonus.value);
  console.log(earnings);
  const message = `Your total earnings for this month: $${earnings}`;
  console.log(message);
  messageHandler(message);
});

clearButton.addEventListener('click', () => {
  resetValues();
});