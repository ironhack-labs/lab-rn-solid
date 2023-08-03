import User from "./user"
import { Circle, Rectangle, Triangle, AreaCalculator } from "./shapes";
import {Dog, Fish, printInfo} from './animals'
import {FancyPrinter, SimplePrinter, type Printer} from './printer'
import {FileLogger, DatabaseLogger, type Logger, UsersDB} from './Logger'
import { UserSignUp } from "./userSignUp";

const newUser = new UserSignUp(1, "John Doe", "john@example.com", "secretpassword");
newUser.saveToDatabase();
newUser.sendWelcomeEmail();

// Iteration 2:

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(circle);
const rectangleArea = AreaCalculator.calculateArea(rectangle);
const triangleArea = AreaCalculator.calculateArea(triangle);

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12

// Iteration 3: 

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

// Iteration 4:

const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); 

// Iteration 5:

const fileLogger: Logger = new FileLogger();
const usersDb: UsersDB = new UsersDB();
const databaseLogger: Logger = new DatabaseLogger(usersDb);

fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.