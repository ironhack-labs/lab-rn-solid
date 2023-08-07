export interface Logger {
  log(message: string): void;
}

export interface Database {
  saveDatabase(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class Database implements Database {
  public saveDatabase(message: string): void {
    console.log(`Logging to database: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  log(message: string): void {
    this.database.saveDatabase(message);
  }
}
