//Es importante recalcal que el codigo inicial no cumplia son la Responsabilidad Unica de nuestros principios de SOLID, ya que estaba delegando muchas funciones a una sola clase,
//esto provocaba violaba nuestro principio, por lo que para la refactorizacion tome encuenta eso como principal fundamento de lo que haria.

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

  //Si bien no se utiliza, es mejor dejarlo en privado ya que solo sera de uso interno.
  private getPassword(): string {
    return this.password;
  }

  // Método para guardar el usuario en la base de datos
  public saveToDatabase(): void {
    const userRepository = new UserRepository();
    userRepository.saveToDatabase(this);
  }

  // Método para enviar el correo de bienvenida
  public sendWelcomeEmail(): void {
    const emailService = new EmailService();
    emailService.sendWelcomeEmail(this);
  }

  // Método para validar la contraseña del usuario
  public validatePassword(inputPassword: string): boolean {
    const passwordValidator = new PasswordValidator();
    return passwordValidator.validatePassword(this, inputPassword);
  }

  // Método para generar el token de autenticación
  public generateAuthToken(): string {
    const authTokenGenerator = new AuthTokenGenerator();
    return authTokenGenerator.generateAuthToken(this);
  }
}

//Tenemos nuestra clase para guardar los datos del usuario en nuestra base de datos.
class UserRepository {
  public saveToDatabase(user: User): void {
    console.log(`Guardando el usuario ${user.getName()} en la base de datos.`);
  }
}

//Tenemos nuestra clase para enviar el correo de bienvenida al usuario.
class EmailService {
  public sendWelcomeEmail(user: User): void {
    console.log(`Enviando correo de bienvenida a ${user.getEmail()}.`);
  }
}

//Un validador de contraseñas para nuestros usuarios.
class PasswordValidator {
  public validatePassword(user: User, inputPassword: string): boolean {
    console.log(`Validando contraseña para el usuario ${user.getName()}.`);
    return false;
  }
}

//Por último nuestro Auth para el token del usuario.
class AuthTokenGenerator {
  public generateAuthToken(user: User): string {
    console.log(`Generando token de autenticación para el usuario ${user.getName()}.`);
    return '';
  }
}
