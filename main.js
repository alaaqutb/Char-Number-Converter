function calculate() {
  const result = document.getElementById("result");
  const myInput = document.getElementById("myInput");
  result.innerText = getDecimalNumber(myInput.value);
}

function getDecimalNumber(stringChar) {
  let result;
  if (!parseInt(stringChar)) {
    result = stringChar
      .split("")
      .reduce(
        (previousValue, currentValue) =>
          previousValue * 26 + parseInt(currentValue, 36) - 10,
        0
      );
  } else {
    result = 'Error!';
  }
  return result;
}
