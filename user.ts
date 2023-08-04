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

  public saveToDatabase(): void {
    // TODO: Implement the logic to save the user data to the database
  }

  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
  }

  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return false;
  }

  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return '';
  }
}

/**
 * Modified version of User class with less responsibilities and better aproach of the Single responsibility Principle.
 */

class User {
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

// On another class we can manage the password validations
class UserValidation {
  public validatePassword(user: User, inputPassword: string): boolean {
    return user.getPassword() === inputPassword;
  }
}

// On another class we can manage the AuthToken Generations
class AuthTokenGenerator {
  public generateAuthToken(user: User): string {
    //Auth token gen logic
    return 'token';
  }
}

// Create other class responsible for saving the user data to the database
//on other langauges can be UserRepository
class UserSaver {
  public saveToDatabase(user: User): void {
    // TODO: Implement the logic to save the user data to the database
  }
}

//Have a class responsible for sending a welcome email to the user
class EmailService {
  public sendWelcomeEmail(user: User): void {
  }
}

