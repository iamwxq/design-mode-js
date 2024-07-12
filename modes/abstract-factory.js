/// 抽象工厂模式
/// 抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建

class User {
  constructor(name, role, pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  show() {
    throw new Error("抽象方法必须要被子类实现");
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "superadmin", ["home", "user-manage", "right-manage", "news-manage"]);
  }

  show() {
    console.log("this is superadmin");
    console.log(this.pages.join(" -- "));
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin", ["home", "user-manage", "news-manage"]);
  }

  show() {
    console.log("this is admin");
    console.log(this.pages.join(" -- "));
  }
}

class Editor extends User {
  constructor(name) {
    super(name, "admin", ["home", "news-manage"]);
  }

  show() {
    console.log("this is editor");
    console.log(this.pages.join(" -- "));
  }
}

export class UserAbstractFactory {
  constructor(role) {
    switch (role) {
      case "superadmin":
        return SuperAdmin;
      case "admin":
        return Admin;
      case "editor":
        return Editor;
      default:
        throw new Error("不存在该角色");
    }
  }
}
