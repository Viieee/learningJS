class Animal {
  constructor(){
    this.render();
  }

  render(){
    console.log('parent class');
  }
}

class Rabbit extends Animal {
  constructor(){
    super();
  }
  render(){
    console.log('child class');
  }
}

new Rabbit(); // child class
