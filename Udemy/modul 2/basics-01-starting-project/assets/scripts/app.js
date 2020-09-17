//section 2
//variable & constant
//let x = 123; //variabel, penampung data. x adalah nama dari variabel, nilai dari variabel terletak setelah tanda "="
//const i = 1; //variabel tapi tidak bisa diganti valuenya.
const defaultResult = 0;
let currentResult = defaultResult; //variabel sudah dideklarasi tapi belum di inisialisasi/didefinisi (belum diberi value)
//mendefinisikan variabel (memberi value)

// string bisa menggunakan '', "", dan ``
let contohTandaPetikBeda = `(${defaultResult} adalah hasil)`; // pake `` bisa begini, nampilin variabel pake ${} (template literal)
console.log(contohTandaPetikBeda);

function hitungTambah(num1, num2) {
  const hasil = num1 + num2;
  outputResult(hasil, num2);
}

hitungTambah(currentResult, 1);
