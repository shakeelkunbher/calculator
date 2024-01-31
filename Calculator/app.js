var inputValue = document.getElementById("inputFeild");
function numberFunction(num) {
  var lastChar = inputValue.value[inputValue.value.length - 1];
  var mathOprations = ["-", "+", "/", "*", "%"];
  if (
    mathOprations.indexOf(lastChar) !== -1 &&
    mathOprations.indexOf(num) !== -1
  ) {
    inputValue.value = inputValue.value.slice(0, -1) + num;
  } else {
    inputValue.value += num;
  }

  switch (inputValue.value[0]) {
    case "*":
    case "/":
    case "%":
      inputValue.value = "";
  }
}
function clearResult() {
  inputValue.value = "";
}

function del() {
  inputValue.value = inputValue.value.slice(0, -1);
}

function getResult() {
  inputValue.value = eval(inputValue.value);
}
