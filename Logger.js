// export interface Logger {
//   log(message: string): void;
// }
var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.log = function (message) {
        console.log("Registering file: ".concat(message));
    };
    return FileLogger;
}());
var DatabaseLogger = /** @class */ (function () {
    function DatabaseLogger(database) {
        this.db = database;
    }
    DatabaseLogger.prototype.log = function (message) {
        this.db.log("Registering in database: ".concat(message));
    };
    return DatabaseLogger;
}());
// Pruebas
var fileLogger = new FileLogger();
var databaseLogger = new DatabaseLogger(fileLogger);
fileLogger.log("This is a log message in a file.");
databaseLogger.log("This is a log message in the database.");
