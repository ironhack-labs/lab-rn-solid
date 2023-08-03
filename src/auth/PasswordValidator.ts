// passwordValidator.ts - PasswordValidator class
export default class PasswordValidator {
    public static validatePassword(inputPassword: string, userPassword: string): boolean {
      // TODO: Implement the logic to validate the user's password
      return inputPassword === userPassword;
    }
  }
