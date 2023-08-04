import { DataBase } from "../data/Database";
import Logger from "../interfaces/ILogger";

export default class DataBaseLogger implements Logger {
  // TODO: Fill in the missing code to adhere to the Dependency Inversion Principle
  private database: DataBase;

  constructor() {
    this.database = new DataBase();
  }

  public log(message: string): void {
    this.database.logDBAction(message);
  }
}
