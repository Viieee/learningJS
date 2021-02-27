 class Person{
     name='Vieri';
     constructor(){
         this.age=21;
     }
     greet(){
         console.log('Hi, my name is '+ this.name + ', i\'m '+this.age);
     }
 }
// is similar to :
// constructor function
// function Person(){
//     this.age = 30;
//     this.name = 'Vieri';
//     this.greet = ()=>{
//         console.log('Hi, my name is '+ this.name + ', i\'m '+this.age);
//     }
// }
const prsn = new Person(); 
// instantiating the function with the 'new' keyword will make an object called 'this'
// then every properties and method inside the function will be moved into the 'this' object
// after that  the function will return the 'this' object
// the code representation of it :
// function Person(){
//     this = {age: 30,
//         name: 'Vieri',
//         greet: ()=>{
//             console.log('Hi, my name is '+ this.name + ', i\'m '+this.age);
//     }}
//     return this;
// }

prsn.greet();
console.log(prsn)
console.dir(Person);
// Hi, my name is Vieri, i'm 21
// app.js:34 
// Person {name: "Vieri", age: 21}
// age: 21
// name: "Vieri"
// __proto__: Object