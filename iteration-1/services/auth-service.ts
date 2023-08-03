import { User } from "../models";

export class AuthService {
  public generateAuthToken(user: User): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return "GeneratedAuthToken";
  }

  public validatePassword(user: User, inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    return user.getPassword() === inputPassword;
  }
}
