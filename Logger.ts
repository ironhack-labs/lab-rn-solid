export interface Logger {
  log(message: string) : void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
  public log(message: string): void {
   console.log(`Logging to database: ${message}`);
  }
}

const fileLogger = new FileLogger();
const databaseLogger = new DatabaseLogger();

fileLogger.log("This is a log message in a file.");
databaseLogger.log("This is a log message in the database.");


/**
 * FileLogger and DatabaseLogger classes implement the "Logger" interface. The DatabaseLogger class depends on the abstraction rather
 * than the concrete implementation of "Logger".
 * Now DatabaseLogger class relies on an abstraction, making it more flexible
 */