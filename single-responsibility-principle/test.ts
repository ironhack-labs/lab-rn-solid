import { User } from "./User";
import { UserMailer } from "./UserMailer";
import { UserRepository } from "./UserRepository";

const user = new User(1, "John Doe", "john@example.com", "secretpassword");
const userRepository = new UserRepository();
const userMailer = new UserMailer();

userRepository.saveToDatabase(user);
userMailer.sendWelcomeEmail(user);
