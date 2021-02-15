class Person{
    constructor(name, age, sex, location){
        // creating new properties
        // and providing custom initialization
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.location = location;
    }
}

// parent class, to implement inheritance
class TambahUmur{
    // receiving data from initialization
    constructor (age,addedAge){
        // creating new property called umur inside this class
        this.age = age;
        this.addedAge = addedAge
    }
    tambah(){
        const totalUmur = this.age + this.addedAge;
        console.log(totalUmur);
    }
}

class PersonList{

    // initializing Person class 
    persons = [
        new Person('Vieri Adhitya', 21, 'M', 'Semarang'),
        new Person('Tyler The Creator', 29, 'M', 'Los Angeles'),
        new Person('Maya Jama', 26, 'F', 'London')
    ];

    loggingNewAge(){
        for(const person of this.persons){
            const onePerson = new OnePerson(person, person.age, 5);
            onePerson.output();
        }
    }
}

class OnePerson extends TambahUmur{
    constructor(person, age, addedAge){
        super(age,addedAge);
        this.person = person;
    }
    output(){
        const newAge = this.tambah();
    }
}

const baru = new PersonList();
baru.loggingNewAge();
