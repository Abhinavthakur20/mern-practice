const userName = prompt("Enter your name:");
const age = prompt("Enter your age:");

const text = `My name is ${userName} and age is ${age}.`;
console.log(text);
document.getElementById("add").innerHTML = text;

