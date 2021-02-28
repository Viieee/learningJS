// class ParentClass{
//     method1(){

//     }
// }
// class Person {//extends ParentClass{
  
//     constructor(){
//         // super();
//         this.name='Vieri';
//         this.age=21;
//      }
//      greet(){
//          console.log('Hi, my name is '+ this.name + ', i\'m '+this.age);
//      }
//  }

 function Person(){
         this.age = 30;
         this.name = 'Vieri';
         this.greet = ()=>{
             console.log('Hi, my name is '+ this.name + ', i\'m '+this.age);
         }
}
Person.prototype = { 
    method2(){

    }
};
console.dir(Person);

const prsn = new Person(); 
prsn.greet();
console.log(prsn)
// console.dir(ParentClass);
