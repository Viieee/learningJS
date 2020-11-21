//global variable
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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
  alert("Input Field Can't Be Empty!");
}

//buat log operasi
function buatLog(operasi, hasilSebelum, inputan, totalSementara) {
  const logUser = {
    operasi: operasi,
    hasilSebelum: hasilSebelum,
    inputanUser: inputan,
    hasil: totalSementara,
  };
  logEntries.push(logUser);
  console.log(logEntries);
}

function hitung(tipeHitung) {
  if (userInput.value != '') {
    const inputanUser = parseInputanUser();
    const hasilSebelumnya = currentResult;
    let operasiHitung;
    if (tipeHitung === 'Tambah') {
      currentResult += inputanUser;
      operasiHitung = ' + ';
    }
    if (tipeHitung === 'Kurang') {
      currentResult -= inputanUser;
      operasiHitung = ' - ';
    }
    if (tipeHitung === 'Kali') {
      currentResult *= inputanUser;
      operasiHitung = ' * ';
    }
    if (tipeHitung === 'Bagi') {
      currentResult /= inputanUser;
      operasiHitung = ' / ';
    }
    createOutput(operasiHitung, hasilSebelumnya, inputanUser);
    buatLog(tipeHitung, hasilSebelumnya, inputanUser, currentResult);
    userInput.value = null;
  } else {
    emptyInput();
  }
}

//fungsi button add
function pencetButtonAdd() {
  hitung('Tambah');
}

//fungsi button subtract
function pencetButtonSubtract() {
  hitung('Kurang');
}

//fungsi button multiply
function pencetButtonMultiply() {
  hitung('Kali');
}

//fungsi button divide
function pencetButtonDivide() {
  hitung('Bagi');
}

//event listener button
addBtn.addEventListener('click', pencetButtonAdd);
subtractBtn.addEventListener('click', pencetButtonSubtract);
multiplyBtn.addEventListener('click', pencetButtonMultiply);
divideBtn.addEventListener('click', pencetButtonDivide);
