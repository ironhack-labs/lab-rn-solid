// export interface Logger {
//   log(message: string): void;
// }

// export class FileLogger implements Logger {
//   public log(message: string): void {
//     console.log(`Logging to file: ${message}`);
//   }
// }

// export class DatabaseLogger implements Logger {
//   // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
// }

export interface Logger {
  log(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Registering file: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  private db: Logger;

  constructor(database: Logger) {
    this.db = database;
  }

  public log(message: string): void {
    this.db.log(`Registering in database: ${message}`);
  }
}
