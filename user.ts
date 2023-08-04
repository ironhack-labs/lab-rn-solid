// export default class User {
//   private id: number;
//   private name: string;
//   private email: string;
//   private password: string;

//   constructor(id: number, name: string, email: string, password: string) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   public getId(): number {
//     return this.id;
//   }

//   public getName(): string {
//     return this.name;
//   }

//   public getEmail(): string {
//     return this.email;
//   }

//   public getPassword(): string {
//     return this.password;
//   }

//   public saveToDatabase(): void {
//     // TODO: Implement the logic to save the user data to the database
//   }

//   public sendWelcomeEmail(): void {
//     // TODO: Implement the logic to send a welcome email to the user
//   }

//   public validatePassword(inputPassword: string): boolean {
//     // TODO: Implement the logic to validate the user's password
//     return false;
//   }

//   public generateAuthToken(): string {
//     // TODO: Implement the logic to generate an authentication token for the user
//     return '';
//   }
// }

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
}

export class UserRepository {
  public saveToDatabase(user: User): void {
    console.log('Saving in database:', user);
  }
}

export class EmailService {
  public sendWelcomeEmail(user: User): void {
    console.log('Sending a welcome email to:', user.getEmail());
  }
}

export class AuthTokenGenerator {
  public generateAuthToken(user: User): string {
    console.log('Generating auth token to:', user.getName());
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjMyNDI5MTc2LCJleHAiOjE2MzI0MzIzNzZ9.TGW0q3o5PiFhdfQIT3E7TjgipU2FSC4h8rLzgEg47vo';
  }
}


