import User, { Auth, EmailService, SaveDatabase } from "./user/user";
import { Circle, Rectangle, Triangle, AreaCalculator } from "./shapes/shapes";
import { Dog, Fish, printInfo } from "./animals/animals";
import { FancyPrinter, SimplePrinter, type Printer } from "./printer/printer";
import { FileLogger, DatabaseLogger, type Logger } from "./Logger";

// Iteration 1:

console.log(`--USER--`);
const user = new User(1, "John Doe", "john@example.com", "secretpassword");
const saveDatabase = new SaveDatabase();
const emailService = new EmailService();
const auth = new Auth();

saveDatabase.saveToDatabase(user);
emailService.sendWelcomeEmail(user);

if (auth.validatePassword(user, "secretpassword")) {
  const token = auth.generateAuthToken();
  console.log(`Token generado ${token}`);
}

// Iteration 2:

console.log(`--SHAPES--`);
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(circle);
const rectangleArea = AreaCalculator.calculateArea(rectangle);
const triangleArea = AreaCalculator.calculateArea(triangle);

console.log("Esta es la área del cículo: ", circleArea); // Output: 78.53981633974483
console.log("Esta es la área del rectángulo: ", rectangleArea); // Output: 24
console.log("Esta es la área del triángulo: ", triangleArea); // Output: 12

// Iteration 3:

console.log(`--ANIMALS--`);
const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

// Iteration 4:

console.log(`--PRINTER--`);
const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.

// Iteration 5:

console.log(`--LOGGER--`);
// const fileLogger: Logger = new FileLogger();
// const databaseLogger: Logger = new DatabaseLogger();

// fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
// databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
