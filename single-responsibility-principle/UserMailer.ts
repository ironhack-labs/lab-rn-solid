import { User } from "./User";

export class UserMailer {
  public sendWelcomeEmail(user: User): void {
    console.log(`Sending welcome email to: ${user.getEmail()}.`);
  }
}
