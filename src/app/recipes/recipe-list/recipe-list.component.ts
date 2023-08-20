import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe One',
      'Description for first recipe',
      'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg'
    ),
    new Recipe(
      'A Test Recipe Two',
      'Description for second recipe',
      'https://img.freepik.com/free-photo/top-view-food-ingredients-with-notebook-pumpkin_23-2148834716.jpg?w=2000'
    ),
  ];

  ngOnInit(): void { }
  onRecipeClick(currentRecipe: Recipe) {
    this.recipeWasSelected.emit(currentRecipe);
  }
}
