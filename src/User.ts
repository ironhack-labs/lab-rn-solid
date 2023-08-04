import { ValidatePassword } from "./User/utils/ValidatePassword";
import { GenerateAuthToken } from "./User/utils/GenerateAuthToken";
import { GetEmail } from "./User/GetEmail";
import { SaveToDatabase } from "./User/controllers/SaveToDatabase";
import { SendWelcomeEmail } from "./User/middleware/SendWelcomeEmail";
import { GetId } from "./User/GetId";
import { GetName } from "./User/GetName";
import { GetPassword } from "./User/GetPassword";
export default class User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public validatePassword: ValidatePassword;
  public generateAuthToken: GenerateAuthToken;
  public getEmail: GetEmail;
  public saveToDatabase: SaveToDatabase;
  public sendWelcomeEmail: SendWelcomeEmail;
  public getId: GetId;
  public getName: GetName;
  public getPassword: GetPassword;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.validatePassword = new ValidatePassword(this.password);
    this.generateAuthToken = new GenerateAuthToken();
    this.getEmail = new GetEmail(this.email);
    this.saveToDatabase = new SaveToDatabase(
      this.name,
      this.email,
      this.password
    );
    this.sendWelcomeEmail = new SendWelcomeEmail();
    this.getId = new GetId(this.id);
    this.getName = new GetName(this.name);
    this.getPassword = new GetPassword(this.password);
  }
}
