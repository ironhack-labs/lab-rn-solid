import User from "../models/User";

export class AuthService {
  public generateAuthToken(user: User): string {
    // TODO: Implement the logic to generate an authentication token for the user
    return `new-token-user-${user.getId()}`;
  }

  public validatePassword(user: User, inputPassword: string): boolean {
    // TODO: Implement the logic to validate the user's password
    const savedPassword = user.getPassword();

    return savedPassword === inputPassword;
  }
}
