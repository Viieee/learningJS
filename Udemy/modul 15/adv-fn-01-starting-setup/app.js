let username = 'Vieri';
function greetUser(){
    console.log('Hi '+username+'!')
}

username = 'Adhit';
// the username inside greetUser function will changed into Adhit aswell, because it's pointing into the variable, 
// not just the value of the variable.
greetUser();
// so when we execute the function, the username inside of it will reflect the most recent value we give it.