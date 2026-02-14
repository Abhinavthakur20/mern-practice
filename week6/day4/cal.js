const inputMain = document.getElementById("inputMain");

function cal(value) {

  inputMain.value += value;

}
function clearInput() {

  inputMain.value = "";

}

function calculate() {
  try {
    inputMain.value = Function("return " + inputMain.value)();
  }
  catch {
    inputMain.value = "Error";
  }
}
