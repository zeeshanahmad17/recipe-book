import { EventEmitter } from "@angular/core";
// Model
import { Ingredient } from "./ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngrendient(ingredients: Ingredient) {
        this.ingredients.push(ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addingIngredientsToList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}