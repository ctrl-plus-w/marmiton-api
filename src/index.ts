import Api from "./classes/API";
import Recipe from "./classes/Recipe";

(async () => {
  for (let i = 1; i <= 10; i++) {
    const recipes = await Api.getMainCourses(i);

    for (const recipe of recipes) {
      const detailedRecipe = await Api.getDetailedRecipe(recipe);
      console.log(detailedRecipe);
    }
  }
})();
