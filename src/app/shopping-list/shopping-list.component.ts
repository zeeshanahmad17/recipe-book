import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igSubscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igSubscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onSelectItem(index: number) {
    this.slService.editingItem.next(index);
  }

  ngOnDestroy(): void {
    this.igSubscription.unsubscribe();
  }
}
