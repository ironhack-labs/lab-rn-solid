/* 
The User class currently has the following responsibilities:

Storing user information: The class has private properties for user id, name, email, and password, along with corresponding getter methods (getId, getName, getEmail, getPassword) to retrieve this information. This is a single responsibility related to managing user data.

Database interaction: The class has a method saveToDatabase() which is responsible for saving the user data to the database. This is a separate responsibility related to data persistence.

Sending emails: The class has a method sendWelcomeEmail() to send a welcome email to the user. This is another responsibility related to email communication.

Password validation: The class has a method validatePassword(inputPassword: string): boolean to validate the user's password. This is a separate responsibility related to password management.

Token generation: The class has a method generateAuthToken(): string to generate an authentication token for the user. This is another responsibility related to token generation.

Based on the analysis, the class currently violates the Single Responsibility Principle because it has multiple responsibilities, including data storage, email sending, password validation, and token generation.

To improve adherence to the Single Responsibility Principle, we can refactor the User class by applying the following changes:

Separate Concerns: Create separate classes for each responsibility (data storage, email sending, password validation, and token generation). For example, you could create classes like UserDataStorage, EmailService, PasswordValidator, and AuthTokenGenerator.

Dependency Injection: Inject the required instances of the newly created classes into the User class rather than implementing them directly. This way, the User class won't be directly responsible for handling these concerns.
*/

// user.ts

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

  public saveToDatabase(): void {
    // TODO: Implement the logic to save the user data to the database
    console.log(
      `Saving user data to the database: ${this.name} (${this.email})`
    );
  }

  public sendWelcomeEmail(): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log(`Sending welcome email to ${this.name} (${this.email})`);
  }
}

export default User;
