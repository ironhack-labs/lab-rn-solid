// emailService.ts - EmailService class (email sending)
export default class EmailService {
    public sendWelcomeEmail(user: User): void {
      // TODO: Implement the logic to send a welcome email to the user
      console.log("Sending welcome email to:", user.getEmail());
    }
  }
