/// 原型模式

export class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}
