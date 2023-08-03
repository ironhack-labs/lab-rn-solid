import User from '../models/User';
import UserRepository from '../database/userRepository';
import EmailService from '../email/emailService';
// Creating a new user
const user = new User(1, 'John Doe', 'john@example.com', 'secretpassword');

// Saving the user to the database
const userRepository = new UserRepository();
userRepository.saveToDatabase(user)
  .then(() => {
    console.log('User data saved to the database.');
  })
  .catch((error) => {
    console.error('Error saving user data:', error);
  });

// Sending a welcome email
const emailService = new EmailService();
emailService.sendWelcomeEmail(user);
