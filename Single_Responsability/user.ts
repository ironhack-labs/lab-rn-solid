export default class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getId(): number {
    return this.id;
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

//Cree varias clases manager para delegar cada tarea
//En DataBaseManager decidi usar un tipo generico para hacerla un poco mas reusable y poder guardar cualquier tipo de dato.
export class DataBaseManager<T> {
  dbName:string 

  constructor(dbName: string) {
    this.dbName = dbName
  }

  public saveToDatabase(data: T): void {
    console.log("saving data on database", data)
  }
}

export class EmailManager {
  public sendWelcomeEmail(email: string): void {
    console.log('Sending welcome Email to', email)
  }
}

export class PasswordManager {
  public validatePassword(inputPassword: string): boolean {

    console.log(`Validating passwortd ${inputPassword}`)
    return false;
  }
}

export class AuthManager {
  public generateAuthToken(data: User): string {
    console.log(`Sending credentials email: ${data.getEmail()}, password: ${data.getPassword()}`)
    return '';
  }
}
