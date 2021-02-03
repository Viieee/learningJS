const ulRef = document.querySelector('ul'); //akan menunjuk ke ul pertama yang ada di urutan code

const liRef = document.querySelector('li');

// cara mengganti styling css menggunakan js
const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue'; 
// bisa mengassign sebuah css style ke dalam element node
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  // menggunakan classlist untuk mengatur class lebih mudah
  section.classList.toggle('invisible');
});

// cara menambahkan element node kedalam code html menggunakan js
// menggunakan innerHTML
// section.innerHTML = '<h2>add element melalui innerHTML</h2>';
// code diatas berarti h2 akan mereplace semua element yang ada didalam section
// isi lama dari section akan dihapus

// menggunakan insertAdjacentHTML
// insertHTML mengambil 2 parameter, position dan text html sendiri
// position ada 4: beforebegin, afterbegin, beforeend, dan afterend
// beforebegin berarti sebelum element yang direference
section.insertAdjacentHTML('beforebegin', '<p>add element melalui js menggunakan insertAdjacentHTML beforebegin</p>');
// afterbegin berarti dalam element sebelum first child
section.insertAdjacentHTML('afterbegin', '<p>add element melalui js menggunakan insertAdjacentHTML afterbegin</p>');
// beforeend berarti dalam element setelah last child
section.insertAdjacentHTML('beforeend', '<p>add element melalui js menggunakan insertAdjacentHTML beforeend</p>');
// afterend berarti setelah element
section.insertAdjacentHTML('afterend', '<p>add element melalui js menggunakan insertAdjacentHTML afterend</p>');

// menggunakan method createElement
// kelebihan dari penggunaan method createElement adalah kemudahan dalam mereference element yang baru saja ditambahkan
const newLi = document.createElement('li'); // akan membuat element li
newLi.textContent = 'Item baru';
// sekarang akan menambah element li yang baru ini ke element li yg sudah ada
ulRef.append(newLi); //newLi adalah object
// append akan menggabungkan objek/string dan dijadikan child terakhir
// atau bisa juga menggunakan appendChild()
// perbedaan dari append dan append child adalah 
// append child hanya dapat meng-append nodes object saja
// append dapat meng-append nodes object dan string
// append juga dapat meng-append lebih dari 1 node secara bersamaan

// bisa juga dengan prepend
// prepend akan menggabungkan objek/string dan dijadikan child pertama
ulRef.prepend(newLi);

// bisa juga dengan before()
// before akan meng-append/meletakan objek yang menjadi argumen sebelum reference
ulRef.lastElementChild.before(newLi); // li yang baru akan diletakan setelah li terakhir yang ada di ul

// atau dengan after()
// after akan meng-append/meletakan objek yang menjadi argumen setelah reference
ulRef.firstElementChild.after(newLi);

// NOTE: penggunaan method prepend, append, before, dan after tidak bisa digunakan secara bersamaan ke 1 objek argumen
// line code terakhir adalah line yang akan diemplementasikan bila argumennya sama
// jadi misal ada code :
// ulRef.append(newLi); 
// ulRef.prepend(newLi);
// ulRef.lastElementChild.before(newLi);
// ulRef.firstElementChild.after(newLi); 
// maka yang akan diemplementasikan adalah method after 

// bisa mereplace
// replace dengan replaceWith dan replaceChild
// replaceWith mentarget child sebagai reference dan gantinya sebagai argumen
// replaceChild mentarget parent dari child sebagai reference dan argumennya adalah (childBaru, childLama)
// ulRef.firstElementChild.replaceWith(newLi);


// Sama seperti html, element juga dapat ditambahkan dengan method insertAdjacent
// menggunakan insertAdjacentElement dengan argumen (posisiAturan, objek)

// cara mencopy sebuah element node
// menggunakan cloneNode()
// cloneNode() akan mencopy semua atribut dari node dan value yang terkandung
const newLi2 = newLi.cloneNode();
// cloneNode() mengambil 1 argumen berbentuk boolean, false sebagai default
// jika diset true maka akan mencopy element DAN SEMUA CHILD YANG ADA DI ELEMENT TERSEBUT

// cara meremove element node
// menggunakan remove() dan  removeChild()
// remove() akan menghapus langsung element node yang jadi reference method

// removeChild() mengambil argumen target element node yang akan dihapus dengan reference parent dari node tsb
