class Person{
    constructor(name= 'Anonymuis', age = '0'){
        this.name = name;
        this.age = age;
    }
    getMessage(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year's old`
    }
}

class Student extends Person{
constructor(name,age,major){
    super(name,age);
    this.major = major;
}
hasMajor(){
   return !!this.major;
}

getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
        description += ` and yup he has a degree`
        return description;
    }
}
}

// Traveler

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    getMessage(){
        let message = super.getMessage();
        if(this.homeLocation){
            return message += ` I'am from ${this.homeLocation}`;
        }
        return message;
    }
}

const biker = new Traveler("Bhasidh", 28, "Tirunelveli");
console.log(biker.getMessage());

const carRacer = new Traveler("Siyath", 24);
console.log(carRacer.getMessage());
// const me = new Student('Siyath Kasali', 24, "Information Technology");
// console.log(me.getMessage() + " "+ me.getDescription() +" "+ me.hasMajor());

// const other = new Student('Bhasidh');
// console.log(other.getMessage() +" "+ other.getDescription() +" "+ other.hasMajor());