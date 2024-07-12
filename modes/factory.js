/// 工厂模式
/// 有一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象

export class User {
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }
}

export class UserFactory {
  constructor(role) {
    switch (role) {
      case "superadmin":
        return new User(role, ["home", "user-manage", "right-manage", "news-manage"]);
      case "admin":
        return new User(role, ["home", "user-manage", "news-manage"]);
      case "editor":
        return new User(role, ["home", "news-manage"]);
      default:
        throw new Error("不存在该角色");
    }
  }
}
