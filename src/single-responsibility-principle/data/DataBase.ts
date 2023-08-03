import BaseRecord from "../models/Base";

export default class DataBase<T extends BaseRecord> {
  public save(record: T): void {
    console.log(`Saving record with id ${record.getId()} to the database.`);
  }
}
