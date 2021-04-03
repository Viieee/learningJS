function add(num1, num2){
 return num1 + num2;
}

console.log(add(22,11)); // output 33

function addRandom(num1){
    return num1 + Math.random();
}

console.log(addRandom(11));

let hasilnya = 0;

function addMore(num1, num2){
    const hasil = num1 + num2;
    hasilnya = hasil;
    return hasil;
}

console.log(addMore(1,2)); // 3
console.log(hasilnya); // 3
