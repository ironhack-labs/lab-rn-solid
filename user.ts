class DatabaseService {
  public save (user: User) {
    console.log(`Save user with id ${user.id}`)
  }
}

class EmailService {
  public sendWelcome (email: string) {
    console.log(`Send email to ${email}`)
  }
}

class AuthService {
  public validatePassword (
    inputPassword: string,
    currentPassword: string
  ): boolean {
    return inputPassword === currentPassword
  }

  public generateAuthToken (): string {
    return 'auth-token'
  }
}

class User {
  private _id: number
  private _name: string
  private _email: string
  private _password: string

  constructor (id: number, name: string, email: string, password: string) {
    this._id = id
    this._name = name
    this._email = email
    this._password = password
  }

  public get id (): number {
    return this.id
  }

  public get name (): string {
    return this._name
  }

  public get email (): string {
    return this._email
  }

  public get password (): string {
    return this._password
  }

  // public saveToDatabase(): void {
  //   // TODO: Implement the logic to save the user data to the database
  // }

  // public sendWelcomeEmail(): void {
  //   // TODO: Implement the logic to send a welcome email to the user
  // }

  // public validatePassword(inputPassword: string): boolean {
  //   // TODO: Implement the logic to validate the user's password
  //   return false;
  // }

  // public generateAuthToken(): string {
  //   // TODO: Implement the logic to generate an authentication token for the user
  //   return '';
  // }
}

class UserRepository {
  constructor (
    private databaseService: DatabaseService,
    private emailService: EmailService,
    private authService: AuthService
  ) {}

  public saveToDatabase (user: User): void {
    this.databaseService.save(user)
  }

  public sendWelcomeEmail (email: string): void {
    this.emailService.sendWelcome(email)
  }

  public validatePassword (
    inputPassword: string,
    currentPassword: string
  ): boolean {
    return this.authService.validatePassword(inputPassword, currentPassword)
  }

  public generateAuthToken (): string {
    return this.authService.generateAuthToken()
  }
}

const databaseService = new DatabaseService()
const emailService = new EmailService()
const authService = new AuthService()

const user = new User(1, 'John Doe', 'johndoe@example.com', 'secretpassword')

const userRepository = new UserRepository(
  databaseService,
  emailService,
  authService
)

userRepository.saveToDatabase(user)
userRepository.sendWelcomeEmail(user.email)
