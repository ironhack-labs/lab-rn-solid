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

export class UserUtils {
  private user : User;

  constructor(user: User){
    this.user = user;
  }

  public saveToDatabase(): void {
    // TODO: Implement the logic to save the user data to the database
    console.log(`${this.user.getName()} is saved to database`)
  }

  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log(`Welcome email is sended to ${this.user.getName()}`)
  }

  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return inputPassword.length >= 8
  }

  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    const token = `Bearer  ${this.user.getId().toString()}`
    console.log(`Bearer token is generated to ${this.user.getName}`)
    return token;
  }


}