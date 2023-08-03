export class User {
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

  /**
   * Esta método no cumple con el principio de responsabilidad única.
   */
  public saveToDatabase(): void {
    // TODO: Implement the logic to save the user data to the database
  }

  /**
   * Esta método no cumple con el principio de responsabilidad única.
   */
  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
  }

  /**
   * Esta método no cumple con el principio de responsabilidad única.
   */
  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return false;
  }

  /**
   * Esta método no cumple con el principio de responsabilidad única.
   */
  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return '';
  }
}

/**REFACTOR */
/** colocaré un guien bajo para distinguir la clase refactorizada */

export class User_ {
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

export class Database {
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public saveToDatabase(): number {
    const id:number = 4;
    // TODO: Implement the logic to save the user data to the database
    console.log('el usuario ha sido guardado en la base de datos con el id', id);
    return id;
  }
}

export class EmailManager {

  public sendWelcomeEmail(email: string): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log('Mensaje de bienvenida enviado con exito: ', email);
  }

}

export class AuthManager {

  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    console.log('validando la contraseña: ', password);
    if (password != '123456') {
      return true;
    }
    return false;
  }

  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    console.log('generando token de seguridad');
    return 'zmRtVDfG32eeSTIVpP7Ga9MrjAm7PV9O';
  }
  
}

console.log('INICIO');

const db = new Database('geyser', 'geyser.gallardo@digitalfemsa.com', '123456');
const userId = db.saveToDatabase();

console.log(':::::::::::::');

const user_ = new User_(userId, 'geyser', 'geyser.gallardo@digitalfemsa.com', '123456');
const id = user_.getId();
console.log('id del usuario --> ', id);
const nombre = user_.getName();
console.log('nombre del usuario --> ', nombre);
const email = user_.getEmail();
console.log('email del usuario --> ', email);
const password = user_.getPassword();
console.log('password del usuario --> ', password);

console.log(':::::::::::::');

const emailManager = new EmailManager();
emailManager.sendWelcomeEmail(email);

console.log(':::::::::::::');

const authManager = new AuthManager();
const isValidPassword = authManager.validatePassword(password);
console.log('la contraseña es valida? --> ', isValidPassword);
const token = authManager.generateAuthToken();
console.log('token --> ', token);


console.log('FIN');

