import { DataBaseManager } from "../Single_Responsability/user";

export interface Logger {
  log(message: string): void;
}

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class DatabaseLogger<T> implements Logger {

  dbManager: DataBaseManager<T>

  constructor(dbManager: DataBaseManager<T>) {
    this.dbManager = dbManager
  }

  public log(message: string): void {
    console.log(`Logging to ${this.dbManager.dbName}: ${message}`);
  }
}
