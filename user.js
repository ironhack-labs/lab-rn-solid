// export default class User {
//   private id: number;
//   private name: string;
//   private email: string;
//   private password: string;
//   constructor(id: number, name: string, email: string, password: string) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   public getId(): number {
//     return this.id;
//   }
//   public getName(): string {
//     return this.name;
//   }
//   public getEmail(): string {
//     return this.email;
//   }
//   public getPassword(): string {
//     return this.password;
//   }
//   public saveToDatabase(): void {
//     // TODO: Implement the logic to save the user data to the database
//   }
//   public sendWelcomeEmail(): void {
//     // TODO: Implement the logic to send a welcome email to the user
//   }
//   public validatePassword(inputPassword: string): boolean {
//     // TODO: Implement the logic to validate the user's password
//     return false;
//   }
//   public generateAuthToken(): string {
//     // TODO: Implement the logic to generate an authentication token for the user
//     return '';
//   }
// }
var User = /** @class */ (function () {
    function User(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.saveToDatabase = function (user) {
        console.log('Saving in database:', user);
    };
    return UserRepository;
}());
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendWelcomeEmail = function (user) {
        console.log('Sending a welcome email to:', user.getEmail());
    };
    return EmailService;
}());
var AuthTokenGenerator = /** @class */ (function () {
    function AuthTokenGenerator() {
    }
    AuthTokenGenerator.prototype.generateAuthToken = function (user) {
        console.log('Generating auth token to:', user.getName());
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjMyNDI5MTc2LCJleHAiOjE2MzI0MzIzNzZ9.TGW0q3o5PiFhdfQIT3E7TjgipU2FSC4h8rLzgEg47vo';
    };
    return AuthTokenGenerator;
}());
// 
var user = new User(1, 'Alberto Herm', 'alberto@dev.com', 'qwerty');
var userRepository = new UserRepository();
var emailService = new EmailService();
var authTokenGenerator = new AuthTokenGenerator();
// saveToDatabase para guardar el usuario en la base de datos
userRepository.saveToDatabase(user);
// sendWelcomeEmail para enviar el correo de bienvenida
emailService.sendWelcomeEmail(user);
// generateAuthToken para generar el token de auth
var authToken = authTokenGenerator.generateAuthToken(user);
console.log('Auth token:', authToken);
