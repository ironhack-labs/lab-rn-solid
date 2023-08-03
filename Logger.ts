/* 
we have ensured adherence to the Dependency Inversion Principle. We have created a Logger interface that acts as the abstraction. Both the FileLogger and DatabaseLogger classes depend on this interface.

The FileLogger class implements the Logger interface and provides a basic implementation for logging messages to a file.
The DatabaseLogger class also implements the Logger interface and provides an implementation for logging messages to the database.
By depending on the Logger interface, the DatabaseLogger class does not have a direct dependency on low-level modules like the database itself. Instead, it relies on the abstraction provided by the Logger interface.
*/

interface Logger {
  log(message: string): void;
}

class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

class DatabaseLogger implements Logger {
  public log(message: string): void {
    // TODO: Implement the logic to log the message to the database
    console.log(`Logging to database: ${message}`);
  }
}

export { Logger, FileLogger, DatabaseLogger };
