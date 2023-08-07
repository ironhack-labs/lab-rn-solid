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

// Se separan las responsabilidades en clases diferentes
export class SaveDatabase {
  // Se encargará únicamente de mantener los datos del usuario.
  private database: User[] = []; // Representación de una base de datos en memoria
  public saveToDatabase(user: User): void {
    // TODO: Implement the logic to save the user data to the database
    this.database.push(user); // Agregar el usuario
    console.log(
      `Los datos del usuario ${user.getId()} se guardaron en la base de datos`
    ); //
  }
}

export class EmailService {
  public sendWelcomeEmail(user: User): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log(`Enviando el email ${user.getEmail()}`);
  }
}

export class Auth {
  public validatePassword(user: User, inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return user.getPassword() === inputPassword;
  }


  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return "1234Token";
  }
}
