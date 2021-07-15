const addButton = document.querySelector("#addButton")! as HTMLButtonElement;
const clearButton = document.querySelector('#clearButton')! as HTMLButtonElement;
const baseSalary = document.querySelector("#num1")! as HTMLInputElement;
const bonus = document.querySelector("#num2")! as HTMLInputElement;
const messageBox = document.querySelector("#messageBox")! as HTMLElement;

const totalEarnings = (baseSalary: number, bonus: number):number => {
  return baseSalary + bonus;
}

const messageHandler = (message):void => {
  messageBox.innerText = message;
}

const resetValues = ():void => {
  baseSalary.value = '';
  bonus.value = '';
  messageHandler('');
}

addButton.addEventListener("click", ():void => {
  debugger
  const earnings = totalEarnings(+baseSalary.value, +bonus.value);
  console.log(earnings);
  const message = `Your total earnings for this month: $${earnings}`;
  console.log(message);
  messageHandler(message);
});

clearButton.addEventListener('click', ():void => {
  resetValues();
});