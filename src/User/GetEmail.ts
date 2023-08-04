export class GetEmail {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  getEmail(email: string): string {
    return email;
  }
}
