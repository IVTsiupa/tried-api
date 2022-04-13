interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public properties: T;

  protected constructor(properties: T) {
    this.properties = {
      ...properties,
    };
  }

  public equals(other: ValueObject<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (other.properties === undefined) {
      return false;
    }

    return JSON.stringify(this.properties) === JSON.stringify(other.properties);
  }
}
