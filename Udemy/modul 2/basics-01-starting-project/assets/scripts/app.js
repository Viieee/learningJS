//section 2
//variable & constant
//let x = 123; //variabel, penampung data. x adalah nama dari variabel, nilai dari variabel terletak setelah tanda "="
//const i = 1; //variabel tapi tidak bisa diganti valuenya.
// string bisa menggunakan '', "", dan ``
// let contohTandaPetikBeda = `(${defaultResult} adalah hasil)`;  pake `` bisa begini, nampilin variabel pake ${} (template literal)
// console.log(contohTandaPetikBeda);
const defaultResult = 0;
let currentResult = defaultResult; //variabel sudah dideklarasi tapi belum di inisialisasi/didefinisi (belum diberi value)
//mendefinisikan variabel (memberi value)

//memparse inputan user menjadi integer
function parseInputanUser() {
  return parseInt(userInput.value);
}

//menampilkan output
function createOutput(operator, hasilSebelumnya, inputanUser) {
  const text = hasilSebelumnya + operator + inputanUser;
  outputResult(currentResult, text);
}

//fungsi button add
function pencetButtonAdd() {
  const inputanUser = parseInputanUser();
  const hasilSebelumnya = currentResult;
  currentResult += inputanUser;
  createOutput(' + ', hasilSebelumnya, inputanUser);
  userInput.value = '';
}

//fungsi button subtract
function pencetButtonSubtract() {
  const inputanUser = parseInputanUser();
  const hasilSebelumnya = currentResult;
  currentResult -= inputanUser;
  createOutput(' - ', hasilSebelumnya, inputanUser);
  userInput.value = '';
}

//fungsi button multiply
function pencetButtonMultiply() {
  const inputanUser = parseInputanUser();
  const hasilSebelumnya = currentResult;
  currentResult *= inputanUser;
  createOutput(' * ', hasilSebelumnya, inputanUser);
  userInput.value = '';
}

//fungsi button divide
function pencetButtonDivide() {
  const inputanUser = parseInputanUser();
  const hasilSebelumnya = currentResult;
  currentResult /= inputanUser;
  createOutput(' / ', hasilSebelumnya, inputanUser);
  userInput.value = '';
}

//event listener button
addBtn.addEventListener('click', pencetButtonAdd);
subtractBtn.addEventListener('click', pencetButtonSubtract);
multiplyBtn.addEventListener('click', pencetButtonMultiply);
divideBtn.addEventListener('click', pencetButtonDivide);
