export interface Database {
  saveToDatabase(message: string): void;
}

export class DatabaseImpl implements Database {
  public saveToDatabase(message: string): void {
    console.log(`Logging to database: ${message}`);
  }
}
