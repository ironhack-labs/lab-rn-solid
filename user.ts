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
    return "";
  }
}

/* Podríamos mejorar el single responsability principle en esta clase si la encargamos unicamente de darnos acceso a los datos del usuario, 
 es decir que le removeriamos los methodos "saveToDataBase", "sendWelcomeEmail", "validatePassword" y "generateAuthToken" los cuales podríamos
 condierar responsabilidades independientes y los separiamos en sus propias funciones. 
*/

export class UserSolid {
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

function saveUserToDatabase(user: {
  id: number;
  name: string;
  email: string;
  password: string;
}): void {
  // TODO: Implement the logic to save the user data to the database
}

function sendWelcomeEmail(email: string): void {
  // TODO: Implement the logic to send a welcome email to the user
}

function validatePassword(inputPassword: string): boolean {
  // TODO: Implement the logic to validate the user's password
  return false;
}

function generateAuthToken(email: string, password: string): string {
  // TODO: Implement the logic to generate an authentication token for the user
  return "";
}
