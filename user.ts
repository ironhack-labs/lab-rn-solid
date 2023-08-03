// Clase User para representar a un usuario
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

  // Métodos para obtener información del usuario
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  // Método para guardar el usuario en la base de datos
  saveToDatabase(): void {
    const userRepository = new UserRepository();
    userRepository.save(this);
  }

  // Método para enviar el correo de bienvenida
  sendWelcomeEmail(): void {
    const emailService = new EmailService();
    emailService.sendWelcome(this);
  }

  // Método para validar la contraseña del usuario
  validatePassword(inputPassword: string): boolean {
    const passwordValidator = new PasswordValidator();
    return passwordValidator.validate(this, inputPassword);
  }

  // Método para generar el token de autenticación
  generateAuthToken(): string {
    const authTokenGenerator = new AuthTokenGenerator();
    return authTokenGenerator.generate(this);
  }
}

// Clase para guardar los datos del usuario en la base de datos
class UserRepository {
  save(user: User): void {
    console.log(`Guardando el usuario ${user.getName()} con ID ${user.getId()} en la base de datos.`);
  }
}

// Clase para enviar el correo de bienvenida al usuario
class EmailService {
  sendWelcome(user: User): void {
    console.log(`Enviando correo de bienvenida a ${user.getName()} (${user.getEmail()}).`);
  }
}

// Clase para validar contraseñas de usuarios
class PasswordValidator {
  validate(user: User, inputPassword: string): boolean {
    console.log(`Validando contraseña para el usuario ${user.getName()} (${user.getEmail()}).`);
    return false;
  }
}

// Clase para generar el token de autenticación
class AuthTokenGenerator {
  generate(user: User): string {
    console.log(`Generando token de autenticación para ${user.getName()} (${user.getEmail()}).`);
    return '';
  }
}
