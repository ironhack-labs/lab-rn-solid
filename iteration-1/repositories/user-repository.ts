import { User } from "../models";

export class UserRepository {
  public saveToDatabase(user: User): void {
    // TODO: Implement the logic to save the user data to the database
    console.log(`Saving user with id ${user.getId()} to the database.`);
  }
}
