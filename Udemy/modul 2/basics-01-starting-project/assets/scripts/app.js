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

let text = '';

function pencetButtonAdd() {
  const inputanUser = parseInt(userInput.value);
  if (currentResult != 0){
    text = text + " + " + inputanUser;
  } else{
    text = text + inputanUser;
  }
  currentResult += inputanUser ;
  outputResult(currentResult,text);
  userInput.value = '';
}

addBtn.addEventListener('click', pencetButtonAdd);
