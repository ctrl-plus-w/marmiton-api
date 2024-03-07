class Ingredient {
  constructor(
    public name: string,
    public images: string[],
    public quantity?: [number, string | null],
    public shelfLife?: number,
    public openedShelfLife?: number
  ) {}

  asJSON(): Record<string, any> {
    return {
      name: this.name,
      images: this.images,
      quantity: this.quantity,
      shelfLife: this.shelfLife,
    };
  }

  static fromJSON(object: Record<string, any>) {
    for (const k of ['name', 'images']) {
      if (!(k in object)) throw new Error(`Missing key '${k}' in the object to create the Ingredient instance.`);
    }

    if (!Array.isArray(object['images']))
      throw new Error("Invalid type of 'images' key when creating the Ingredient instance.");
    if (
      object['quantity'] &&
      (!Array.isArray(object['quantity']) || object['quantity'].length != 2 || typeof object['quantity'][0] != 'number')
    )
      throw new Error("Invalid type of 'quantity' key when creating the Ingredient instance.");

    return new Ingredient(object['name'], object['images'], object['quantity'] as [number, string | null]);
  }
}

export default Ingredient;
