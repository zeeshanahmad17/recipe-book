import { EventEmitter, Injectable } from "@angular/core";
// Model
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shopping-list/ingredient.model";
// Services
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe One',
            'Description for first recipe',
            'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg',
            [new Ingredient('Buns', 2),
            new Ingredient('Meat', 20)]
        ),
        new Recipe(
            'A Test Recipe Two',
            'Description for second recipe',
            'https://img.freepik.com/free-photo/top-view-food-ingredients-with-notebook-pumpkin_23-2148834716.jpg?w=2000',
            [new Ingredient('Bread', 4),
            new Ingredient('Chicken', 15)]
        ),
    ];

    constructor(private slService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.slService.addingIngredientsToList(ingredients)
    }
}