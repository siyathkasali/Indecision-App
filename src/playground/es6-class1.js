class Person {
constructor(name="Anonymous",age = 0){
    this.name=name;
    this.age=age;
}
getMessage(){
    return `Hi I'am ${this.name}`;
}
getDescription(){
    return `Hi My name is ${this.name} and I'am ${this.age}`;
}
}

class Student extends Person{
 constructor(name, age, major){
    super(name,age);
     this.major = major;
 }
 hasMajor(){
     return !!this.major;
 }

 getDescription(){
   let description = super.getDescription();
   if(this.hasMajor()){
       description += ` and major is ${this.major}`;
   }
   return description;
  }
}

class Travaler extends Person{
constructor(name, age, city){
    super(name,age);
    this.city = city;
}
getMessage(){
    let message = super.getMessage();
    if(this.city){
        message += ` I am from ${this.city}`;
    }
    return message;
}
}


const me = new Travaler("Siyath Kasali", 24, "Tirunelveli");
const other = new Student();
console.log(me.getMessage());
console.log(other.getMessage());
console.log(me);

