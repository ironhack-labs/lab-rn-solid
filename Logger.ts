export interface Logger {
  message: string,
  log(): void;
}

export class FileLogger implements Logger {
  message: string;
  constructor(message : string){
    this.message = message
  }

  public log(): void {
    console.log(`Logging to file: ${this.message}`);
  }
}

export class DatabaseLogger implements Logger {
  message: string
  constructor(message : string){
    this.message = message
  }

  public log(): void {
    console.log(`Logging to database: ${this.message}`);
  }
}