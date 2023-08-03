import DataBase from "../data/DataBase";
import User from "../models/User";

export class UserRepoistory {
  private database: DataBase<User>;

  constructor() {
    this.database = new DataBase<User>();
  }

  public saveUser(user: User): void {
    // TODO: Implement the logic to save the user data to the database
    this.database.save(user);
  }
}
