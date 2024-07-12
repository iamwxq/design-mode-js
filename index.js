import { Employee } from "./modes/prototype.js";
import { UserFactory } from "./modes/factory.js";
import { UserAbstractFactory } from "./modes/abstract-factory.js";

const emp = new Employee("alec", 23);
emp.say();
console.log(emp);

console.log(`/---------------------------/`);

const user = new UserFactory("superadmin");
user.pages.forEach(page => console.log(page));

console.log(`/---------------------------/`);

const SuperAdmin = new UserAbstractFactory("superadmin");
const sa = new SuperAdmin("alec");
sa.greet();
sa.show();

console.log(`/---------------------------/`);
