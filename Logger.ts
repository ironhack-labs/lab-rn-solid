export interface Logger {
  log(message: string): void
}

export interface DatabaseService {
  name: string
}

export class FileLogger implements Logger {
  public log (message: string): void {
    console.log(`Logging to file: ${message}`)
  }
}

export class DatabaseLogger implements Logger {
  constructor (private dbService: DatabaseService) {}

  public log (message: string): void {
    console.log(`Logging to ${this.dbService.name}: ${message}`)
  }
}

class DatabaseFirebaseService implements DatabaseService {
  name: string = 'Firebase database'
}

class DatabaseAwsService {
  name: string = 'AWS database'
}

// Example Usage:
const fileLogger: Logger = new FileLogger()
const databaseLogger: Logger = new DatabaseLogger(new DatabaseFirebaseService())
// const databaseLogger: Logger = new DatabaseLogger(new DatabaseAwsService())

fileLogger.log('This is a log message in a file.')
databaseLogger.log('This is a log message in the database.')
