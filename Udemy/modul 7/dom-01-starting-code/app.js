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
document.querySelectorAll('.list-item');  // mereturn semua element yang sesuai dengan argumen
document.querySelectorAll('#ini-header'); // sifatnya tidak live/snapshot/static untuk jumlah valuenya
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

// child adalah node anak langsung dari sebuah elemen html
// parent adalah  node orang tua langsung dari sebuah elemen html
// descendant adalah semua node anak dari sebuah elemen html, langsung dan tidak langsung
// ancestor adalah orang tua dari semua node yang berstatus child
// misal
{/* <div>
    <p>
        <em></em>
    </p>
</div> */}
// p adalah child dari div, em bukan.
// em adalah child dari p.
// p dan em adalah descendant dari div
// div adalah parent dari p, bukan em.
// p adalah parent dari em.
// div adalah ancestor dari p dan em.

// cara mereference child node
// adalah dengan method children dan childNodes
// misal akan mereference child dari node ul
// method children (e.g var.children) akan mereference ke semua children ELEMENT NODES dari var
const ulRef = document.querySelector('ul'); //akan menunjuk ke ul pertama yang ada di urutan code
ulRef.children; // hasil dari line code ini akan mereference ke semua child dari ul yang
                // sifatnya tag html, jadi semua tag li. Mereturn HTMLCollection
// method childNodes  (e.g var.children) akan mereference SEMUA node children
// text termasuk node, disebut text node.
ulRef.childNodes // hasil dari line code ini akan mereference ke semua child node dari ul
                // TIDAK HANYA ELEMENT NODE SAJA!
// dengan lastElementChild // firstElementChild // lastChild // firstChild

// cara mereference parent node
// menggunakan parentNode dan parentElement
// semua child pasti hanya memiliki 1 parent
const liRef = document.querySelector('li');
liRef.parentNode
liRef.parentElement 

// cara mereference ancestor
liRef.closest('body');

// cara mereference sibling, sibling adalah node yang sejajar
// menggunakan previousElementSibling dan previousSibling
// misal akan mencoba merefence element header
ulRef.previousElementSibling // akan menunjuk element node yang letaknya sebelum ul yaitu element dengan tag header
ulRef.nextElementSibling // akan menunjuk element node yang letaknya setelah ul yaitu element dengan tag a
// cara mereference sibling dibawah akan mereference semua node, tidak hanya element node saja
ulRef.previousSibling
ulRef.nextSibling
