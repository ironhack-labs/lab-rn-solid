export class SaveToDatabase {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public saveToDatabase(name: string, email: string, password: string): number {
    if (name && email && password) {
      return 200;
    } else {
      return 500;
    }
  }
}
