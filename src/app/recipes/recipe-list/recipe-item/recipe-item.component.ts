import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// models
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<any>()

  constructor() { }
  ngOnInit() { }
  onRecipeSelect() {
    this.selectedRecipe.emit();
  }
}
