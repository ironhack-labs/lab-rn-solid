import { User } from "./User";
import { UserMailer } from "./UserMailer";
import { UserRepository } from "./UserRepository";

export function singleResponsibilityPrinciple() {
  console.log("Iteration 1: Single Responsibility Principle");
  const user = new User(1, "John Doe", "john@example.com", "secretpassword");
  const userRepository = new UserRepository();
  const userMailer = new UserMailer();

  userRepository.saveToDatabase(user);
  userMailer.sendWelcomeEmail(user);
  console.log("");
}
