import { User } from "./User";

export class UserRepository {
  public saveToDatabase(user: User): void {
    console.log(`Saving user: ${user.getName()} to database.`);
  }
}
