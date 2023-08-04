import { SECRET_KEY_JWT } from "../constants/keys";

export class GenerateAuthToken {
  generateAuthToken(): string {
    const newToken = SECRET_KEY_JWT;
    return newToken;
  }
}
