import User from "./user";

interface NewUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class UserSignUp extends User {

  private newUser:NewUser = {
    id: this.getId(),
    email: this.getEmail(),
    name: this.getName(),
    password: this.getPassword()
  };

  public saveToDatabase(): void {
    console.log(`${this.newUser.id} successfuly registered!`)
  }

  public sendWelcomeEmail(): void {
    setTimeout(() => {
      console.log(`Welcome aboard ${this.newUser.name}`);
    }, 1000);
  }

  public validatePassword(inputPassword: string): boolean {
    if(inputPassword === this.newUser.password) {
      return true;
    }
    return false;
  }

  public generateAuthToken(): string {
    if (this.validatePassword(this.newUser.password))
    {
      return `qlzz=/0A?LKAb-TX0neiaI!P=xP1C-/l2oQ?-!bCb7DH1nX4=UrS-KshXOJifG-VD2UfzyVBx2CZ=eZtO6GoYpDwm8Q=nYoQvM!TZhC3Ua=n1nEbDO9kTu/dVC7Ra=?cN27DE3HWAdgNS!6OEU/GIPtSX8==QLs4nBibGyUBTl5h6Q2zexQzLS5VFclU9DzqZYPaRXJSh05GtkzR9H2E8hfzD0B-GT0Dh?g?40w9wWazWals-zRFO4UBCRJ2BT/R`;
    } else {
      return '';
    }

  }
}