import User, { AuthManager, DataBaseManager, EmailManager, PasswordManager } from "./Single_Responsability/user"
import { Circle, Rectangle, Triangle } from "./Open_Close/shapes";
import { Dog, Fish, printInfo } from './Liskov_Substitution/animals'
import { FancyPrinter, SimplePrinter } from './Interface_Segregation/printer'
import { FileLogger, DatabaseLogger, type Logger } from './Dependency_Inversion/Logger'

const user = new User(1, "John Doe", "john@example.com", "secretpassword");

const userDbManager = new DataBaseManager<User>('AWS')
const userEmailManager = new EmailManager()
const userPasswordManager = new PasswordManager()
const userAuthManager = new AuthManager()

userDbManager.saveToDatabase(user)
userEmailManager.sendWelcomeEmail(user.getEmail())
userPasswordManager.validatePassword(user.getPassword())
userAuthManager.generateAuthToken(user)

// Iteration 2:

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = circle.calculateArea();
const rectangleArea = rectangle.calculateArea();
const triangleArea = triangle.calculateArea();

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12

// Iteration 3: 

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

// Iteration 4:

const simplePrinter = new SimplePrinter();
const fancyPrinter = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer.");
fancyPrinter.printFancyContent("Hello, this is a fancy printer.");

// Iteration 5:

const fileLogger = new FileLogger();
const databaseLogger = new DatabaseLogger<User>(userDbManager);

fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.