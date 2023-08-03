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
    console.log('user saved to DB');
  }

  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log('Welcome email sended');
  }

  public validatePassword(inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    console.log('pasword validated')
    return inputPassword == this.password;
  }

  public generateAuthToken(): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return 'el token';
  }
}

/*
  La clase User no se apega al principio de responsabilidad unica, dado que contiene funciones que no son parte de lo que se seria su responsabilidad de contener los datos de un usuario.
  Sus funciones get son correctas dado que no se puede acceder a esta informacion fuera de la calse.
  Como sugerencia de refactorizacion lo idea seria crear un serivicio que realize las demas funciones que estan creadas en la clase:
  Recomenadaira la creacion de 3 archvios para:
    1 los servicios de autenticacion y creacion de usuario, donde las funciones saveToDataBase y validatePassword entrarian.
    2 un servicio para generateAuthToken para todo lo que sea encriptacion..
    3 un servicio de comunicacion para terceros en este caso sendWelcomeEmail
*/