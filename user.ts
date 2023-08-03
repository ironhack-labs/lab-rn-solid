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

  // No getPassword() method here to avoid exposing the password

  public validatePassword(inputPassword: string): boolean {
    const passwordValidator = new PasswordValidator();
    return passwordValidator.validate(inputPassword, this.password);
  }

  public generateAuthToken(): string {
    const authTokenGenerator = new AuthTokenGenerator();
    return authTokenGenerator.generateAuthToken(this.id);
  }
}

class UserDataStorage {
  public saveToDatabase(user: User): void {
    // TODO: Implement the logic to save the user data to the database
    console.log(`Saving user ${user.getName()} to the database`);
  }
}

class EmailService {
  public sendWelcomeEmail(user: User): void {
    // TODO: Implement the logic to send a welcome email to the user
    console.log(`Sending welcome email to ${user.getEmail()}`);
  }
}

class PasswordValidator {
  public validate(inputPassword: string, storedPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return inputPassword === storedPassword;
  }
}

class AuthTokenGenerator {
  public generateAuthToken(userId: number): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return `Token for user with ID ${userId}`;
  }
}

// Example Usage:

const user = new User(1, "John Doe", "john@example.com", "secretpassword");

const userDataStorage = new UserDataStorage();
userDataStorage.saveToDatabase(user);

const emailService = new EmailService();
emailService.sendWelcomeEmail(user);

const inputPassword = "secretpassword";
if (user.validatePassword(inputPassword)) {
  console.log("Password is valid!");
} else {
  console.log("Invalid password!");
}

const authToken = user.generateAuthToken();
console.log(`Generated auth token: ${authToken}`);
