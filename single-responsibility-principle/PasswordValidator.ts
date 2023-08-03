class PasswordValidator {
  public static validatePassword(password: string): boolean {
    return password.length >= 8;
  }
}
