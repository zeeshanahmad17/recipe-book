import { Ingredient } from "../shopping-list/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, img: string, ingred: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
    this.ingredients = ingred;
  }
}
