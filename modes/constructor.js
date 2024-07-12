/// 构造器模式

export function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.say = () => {
    console.log(`hi! my name is ${this.name}.`);
  };
}
