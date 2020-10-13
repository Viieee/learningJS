//global variable
const defaultResult = 0;
let currentResult = defaultResult;

//memparse inputan user menjadi integer
function parseInputanUser() {
  return parseInt(userInput.value);
}

//menampilkan output
function createOutput(operator, hasilSebelumnya, inputanUser) {
  const text = hasilSebelumnya + operator + inputanUser;
  outputResult(currentResult, text);
}

//alert jika input field kosong
function emptyInput() {
  alert('Input Field Can\'t Be Empty!');
}

//fungsi button add
function pencetButtonAdd() {
  if(userInput.value != ''){
    const inputanUser = parseInputanUser();
    const hasilSebelumnya = currentResult;
    currentResult += inputanUser;
    createOutput(' + ', hasilSebelumnya, inputanUser);
    userInput.value = '';
  }else{
    emptyInput();
  }
}

//fungsi button subtract
function pencetButtonSubtract() {
  if(userInput.value != ''){
    const inputanUser = parseInputanUser();
    const hasilSebelumnya = currentResult;
    currentResult -= inputanUser;
    createOutput(' - ', hasilSebelumnya, inputanUser);
    userInput.value = '';
  }else{
    emptyInput();
  }
}

//fungsi button multiply
function pencetButtonMultiply() {
  if(userInput.value != ''){
    const inputanUser = parseInputanUser();
    const hasilSebelumnya = currentResult;
    currentResult *= inputanUser;
    createOutput(' * ', hasilSebelumnya, inputanUser);
    userInput.value = '';
  }else{
    emptyInput();
  }
}

//fungsi button divide
function pencetButtonDivide() {
  if(userInput.value != ''){
    const inputanUser = parseInputanUser();
    const hasilSebelumnya = currentResult;
    currentResult /= inputanUser;
    createOutput(' / ', hasilSebelumnya, inputanUser);
    userInput.value = '';
  }else{
    emptyInput();
  }
}

//event listener button
addBtn.addEventListener('click', pencetButtonAdd);
subtractBtn.addEventListener('click', pencetButtonSubtract);
multiplyBtn.addEventListener('click', pencetButtonMultiply);
divideBtn.addEventListener('click', pencetButtonDivide);
