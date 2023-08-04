export class GetId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  public getId(id: number): number {
    return id;
  }
}
