import type { Database } from "./database";
import type { Logger } from "./logger";

export class DatabaseLogger implements Logger {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  public log(message: string): void {
    this.database.saveToDatabase(message);
  }
}
