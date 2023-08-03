interface Database {
  save(message: string): void;
}

export interface Logger {
  log(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class UsersDB implements Database {
  public save(message: string): void {
    console.log(`Storging msg to DB ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  constructor(private db: Database){}

  public log(message: string): void {
    console.log(`Logging to DB ${message}`);
    this.db.save(message);
  }
}