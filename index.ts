import { Dog, Fish } from "./animals";
import { FileLogger, DatabaseLogger, type Logger } from "./Logger";
import {
  User,
  AuthService,
  EmailService,
  UserRepoistory,
} from "./src/single-responsibility-principle";
import { Circle, Rectangle, Triangle } from "./src/open-closed-principle";
import {
  FancyPrinter,
  SimplePrinter,
  IPrinter,
} from "./src/interface-segregation-principle";

console.group(" Iteration 1: Single Responsibility Principle: ");

const userRepoistory = new UserRepoistory();
const emailService = new EmailService();
const authService = new AuthService();
const user = new User(1, "John Doe", "john@example.com", "secretpassword");

userRepoistory.saveUser(user);
emailService.sendWelcomeEmail(user);

const isCorrectPassword = authService.validatePassword(
  user,
  "AMLO_FOREVER_123"
);

if (isCorrectPassword) {
  const accessToken = authService.generateAuthToken(user);
  console.log("Access token: ", accessToken);
}

console.groupEnd();

console.group(" Iteration 2: Open/Closed Principle: ");

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

console.log(circle.calculateArea()); // Output: 78.53981633974483
console.log(rectangle.calculateArea()); // Output: 24
console.log(triangle.calculateArea()); // Output: 12

console.groupEnd();

// // Iteration 3:

// const dog = new Dog("Buddy");
// const fish = new Fish("Goldfish");

// printInfo(dog); // Output: Info: Dog - Buddy
// printInfo(fish); // Output: Info: Fish - Goldfish

console.group(" Iteration 4: Interface Segregation Principle: ");

const simplePrinter: IPrinter = new SimplePrinter();
const fancyPrinter: IPrinter = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.
console.groupEnd();

// // Iteration 5:

// const fileLogger: Logger = new FileLogger();
// const databaseLogger: Logger = new DatabaseLogger();

// fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
// databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
