export class ValidatePassword {
  password: string;

  constructor(password: string) {
    this.password = password;
  }

  validatePassword(inputPassword: string): boolean {
    const regex = /^[a-z0-9_-]{6,18}$/;
    if (inputPassword.length < 8) {
      console.error("The password is less than 8 characters");
      return false;
    } else if (!regex.test(inputPassword)) {
      return false;
    }
    return true;
  }
}
