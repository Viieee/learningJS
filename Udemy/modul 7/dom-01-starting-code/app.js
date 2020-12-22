// dom adalah code html yang telah di load dan di parse yang telah di convert menjadi sebuah object
// di convert menjadi object dan nantinya bisa dimanipulasi menggunakan javascript
// element adalah semua hal yang ada dalam sebuah page website yang sedang di load (html tags)
// cara - cara query element di dom
// document adalah objek yang merepresentasikan html page yang sedang di load
document.body; // akan menunjuk ke body pada html
document.head; // akan menunjuk ke head pada html

// menggunakan querySelector
document.querySelector('.list-item'); // menggunakan titik didepan nama jika target dari query menggunakan class css
                                      // bila ada lebih dari 1 item yang memiliki nama class maka yang akan
                                      // ditunjuk oleh querySelector adalah item pertama yang sesuai pada code HTML
document.querySelector('#ini-header'); // menggunakan # didepan nama jika target dari query menggunakan id
//menggunakan querySelectorAll
document.querySelectorAll('.list-item');  // mereturn semua element yang sesua dengan argumen
document.querySelectorAll('#ini-header'); // sifatnya tidak live/snapshot/static value
                                          // mereturn NodeList
// menggunakan getElementById
document.getElementById('ini-header');
// menggunakkan getElementsByClassName
document.getElementsByClassName('list-item'); // sifatnya live
                                              // mereturn HTMLCollection
// menggunakkan getElementsByTagName
document.getElementsByTagName('li'); // akan menunjuk semua element dengan tag li pada document
                                     // sifatnya live (kalau dokumen berubah maka isi akan berubah)
                                     // mereturn HTMLCollection