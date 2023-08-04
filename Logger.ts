export interface Logger {
  log(message: string): void;
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

export class MainLogger {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  public log(message: string): void {
    this.logger.log(message);
  }
}

// Example Usage:
const fileLogger: Logger = new FileLogger();
const databaseLogger: Logger = new DatabaseLogger();

const mainLogger1 = new MainLogger( fileLogger );
const mainLogger2 = new MainLogger( databaseLogger );

mainLogger1.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
mainLogger2.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.

/**
 * En esta práctica creé una nueva clase, la cual
 * recibe una instancia de una clase que implementa 
 * la interface Logger. En ella se usa un método
 * log que recibe un string, dicho método ejecuta
 * el metodo log de la intancia recibida en el contructor
 * para imprimir el mensaje.
 */