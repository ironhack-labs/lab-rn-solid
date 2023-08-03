// This class does not follow the Single Responsability principle because sending a welcome email and generating an authentication token might be considered separated
// responsabilities that could potentially change for different reasons, also saving to database seems a responsability that is not part of the User.
// Separating out the email related functionalities, saving to database and the token generator into their own classes would make the User class more focused
// on the core user entity.

export default class User {
  private id: number
  private name: string
  private email: string
  private password: string

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  public getId(): number {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getPassword(): string {
    return this.password
  }

  public validatePassword(inputPassword: string): boolean {
    return this.password === inputPassword
  }
}

export class Email {
  public sendWelcomeEmail(user: User): void {
    console.log(`Welcome ${user.getName()}`)
  }
}

export class TokenService {
  public generateAuthToken(user: User): string {
    console.log('token generated')
    return ''
  }
}

export class Database {
  public saveToDatabase(user: User): void {
    console.log('saved')
  }
}
