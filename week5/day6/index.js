function checkPositiveNegative(num) {
  if (num > 0) {
    console.log('Positive');
  } else if (num < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
}

function checkOddEven(num) {
  if (num % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

function checkStringNumber(text) {
  if (typeof text==='number') {
    console.log('Number');
  } else {
    console.log('String');
  }
}


checkPositiveNegative(5);
checkPositiveNegative(-2);
checkPositiveNegative(0);

checkOddEven(7);
checkOddEven(10);

checkStringNumber('Hello');
checkStringNumber(123);
