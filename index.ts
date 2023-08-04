import User from "./src/User";
import { AreaCalculator } from "./src/AreaCalculator";
import { Circle } from "./src/Circle";
import { Rectangle } from "./src/Rectangle";
import { Triangle } from "./src/Triangle";
import { Dog, Fish, printInfo } from "./src/Animals";
import { FancyPrinter, SimplePrinter, type Printer } from "./src/Printer";
import { FileLogger, DatabaseLogger, type Logger } from "./src/Logger";

const user = new User(1, "John Doe", "john@example.com", "secretpassword");
const getName = user.saveToDatabase;
const getAuth = user.generateAuthToken;

console.log(getName);
console.log(getAuth);

// Iteration 2:

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const areas = AreaCalculator.calculateArea([]);

const circleArea = circle.area();
const rectangleArea = rectangle.area();
const triangleArea = triangle.area();

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12
console.log(areas);

// Iteration 3:

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

// // Iteration 4:

const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

// Iteration 5:

const fileLogger: Logger = new FileLogger();
const databaseLogger: Logger = new DatabaseLogger();

fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
