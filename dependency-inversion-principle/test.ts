import { FileLogger, DatabaseLogger, Logger } from "./Logger";

// Example Usage:
const fileLogger: Logger = new FileLogger();
const databaseLogger: Logger = new DatabaseLogger();

fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
