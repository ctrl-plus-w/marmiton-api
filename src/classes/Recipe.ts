import Ingredient from '@/class/Ingredient';

class Recipe {
  constructor(
    public title: string,
    public url: string
  ) {}

  asJSON() {
    return {
      title: this.title,
      url: this.url,
    };
  }
}

export class DetailedRecipe extends Recipe {
  constructor(
    public title: string,
    public url: string,
    public ingredients: Ingredient[],
    public servings: number,
    public steps: string[],
    public images?: string[],
    public preparationTime?: number,
    public waitingTime?: number,
    public cookingTime?: number
  ) {
    super(title, url);
  }

  asJSON() {
    return {
      ...super.asJSON(),
      ingredients: this.ingredients.map((i) => i.asJSON()),
      servings: this.servings,
      steps: this.steps,
      images: this.images,
      preparationTime: this.preparationTime,
      waitingTime: this.waitingTime,
      cookingTime: this.cookingTime,
    };
  }

  static fromJSON(object: Record<string, any>) {
    for (const k of [
      'title',
      'url',
      'ingredients',
      'servings',
      'steps',
      'images',
      'preparationTime',
      'waitingTime',
      'cookingTime',
    ]) {
      if (!(k in object)) throw new Error(`Missing key '${k}' in the object to create the Recipe instance.`);
    }

    if (!Array.isArray(object['ingredients']))
      throw new Error("Invalid type of 'ingredients' key when creating the Recipe instance.");

    const ingredients = object['ingredients'].map((ingredientObject) => Ingredient.fromJSON(ingredientObject));

    return new DetailedRecipe(
      object['title'],
      object['url'],
      ingredients,
      object['servings'],
      object['steps'],
      object['images'],
      object['preparationTime'],
      object['waitingTime'],
      object['cookingTime']
    );
  }
}

export default Recipe;
