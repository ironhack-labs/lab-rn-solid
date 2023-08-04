import Logger from "../interfaces/ILogger";

export default class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}
