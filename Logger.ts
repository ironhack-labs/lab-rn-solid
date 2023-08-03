// Definición de la interfaz Logger
export interface Logger {
  log(message: string): void;
}

// Implementación de Logger para escribir en un archivo
export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to file: ${message}`);
  }
}

// Implementación de Logger para escribir en una base de datos
export class DatabaseLogger implements Logger {
  public log(message: string): void {
    console.log(`Logging to database: ${message}`);
  }
}
