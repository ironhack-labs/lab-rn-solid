import { User, UserRepository, EmailService, AuthTokenGenerator } from "./user";
import { Circle, Rectangle, Triangle } from "./shapes";
import { Dog, Fish, printInfo} from './animals'
import { FancyPrinter, SimplePrinter, Printer } from './printer'
import { FileLogger, Logger, DatabaseLogger} from './Logger'

const user = new User(1, 'Alberto Herm', 'alberto@dev.com', 'qwerty');

const userRepository = new UserRepository();

const emailService = new EmailService();

const authTokenGenerator = new AuthTokenGenerator();

// saveToDatabase para guardar el usuario en la base de datos
userRepository.saveToDatabase(user);

// sendWelcomeEmail para enviar el correo de bienvenida
emailService.sendWelcomeEmail(user);

// generateAuthToken para generar el token de auth
const authToken = authTokenGenerator.generateAuthToken(user);
console.log('Auth token:', authToken);

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

const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.

// Iteration 5:

const fileLogger: Logger = new FileLogger();
const databaseLogger: Logger = new DatabaseLogger(fileLogger);

fileLogger.log("This is a log message in a file."); // Output: Registering file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Registering in database: This is a log message in the database.
