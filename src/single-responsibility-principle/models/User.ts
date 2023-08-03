import BaseRecord from "./Base";

export default class User extends BaseRecord {
  private name: string;
  private email: string;
  private password: string;

  constructor(id: number, name: string, email: string, password: string) {
    super(id);
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
