import Ingredient from "./Ingredient";

class Recipe {
  constructor(public title: string, public url: string) {
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
    public cookingTime?: number,
  ) {
    super(title, url);
  }
}

export default Recipe;
