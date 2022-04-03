import { UniqueEntityId } from "./UniqueEntityId";

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId;
  public readonly properties: T;

  constructor(properties: T, id?: UniqueEntityId) {
    this._id = id ? id : new UniqueEntityId();
    this.properties = properties;
  }

  private static isEntity(v: unknown): v is Entity<unknown> {
    return v instanceof Entity;
  }

  public equals(other: Entity<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (!Entity.isEntity(other)) {
      return false;
    }

    return this._id.equals(other._id);
  }
}
