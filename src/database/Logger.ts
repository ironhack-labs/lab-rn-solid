interface Logger {
  log(message: string): void;
}

// Introduce a DatabaseService interface to abstract the database operations
interface DatabaseService {
  saveLogToDatabase(message: string): void;
}

// Implement the DatabaseService interface with a concrete database service class
class MyDatabaseService implements DatabaseService {
  public saveLogToDatabase(message: string): void {
    // Code to save log message to the database goes here
    console.log(`Logging to database: ${message}`);
  }
}

class DatabaseLogger implements Logger {
  // Inject the DatabaseService as a dependency through the constructor
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  // Implementation of the log method to perform logging to the database
  public log(message: string): void {
    this.databaseService.saveLogToDatabase(message);
  }
}

export { Logger, DatabaseService, MyDatabaseService, DatabaseLogger}