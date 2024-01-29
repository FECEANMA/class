'use strict'
class Student{
  constructor(name,age) {
    this.name = name;
    this.age = age
  }
  sayHi() {
    alert(this.name);
    alert(this.age)
  }

}


let student = new Student("John",12);
student.sayHi();