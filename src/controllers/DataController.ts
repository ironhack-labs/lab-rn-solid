import { DatabaseLogger, DatabaseService, Logger, MyDatabaseService } from "../database/Logger";

const databaseService: DatabaseService = new MyDatabaseService();
const databaseLogger: Logger = new DatabaseLogger(databaseService);

databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.
