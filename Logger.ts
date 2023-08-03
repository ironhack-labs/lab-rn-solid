//Comenzamos con la definicion de nuestra interfaz logger
export interface Logger {
  log(message: string): void;
}
export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to database: ${message}`);
  }
}

//En general en este ejercicio si se encontraba la mayoria de lo que se necesitaba para fungir con nuestros principios de SOLID, por lo que es una implementacion rapida.