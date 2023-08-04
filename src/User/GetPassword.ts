export class GetPassword {
  password: string;

  constructor(password: string) {
    this.password = password;
  }
  public getName(password: string): string {
    return password;
  }
}
