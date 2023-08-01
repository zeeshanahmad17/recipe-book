import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Description for the test recipe',
      'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg'
    ),
    new Recipe(
      'A Test Recipe',
      'Description for the test recipe',
      'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg'
    ),
  ];

  ngOnInit(): void {}
}
