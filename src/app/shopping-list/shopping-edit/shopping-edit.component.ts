import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
// model
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private slService: ShoppingListService) {}

  onAddIngredient(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    debugger;
    if (newIngredient.amount && newIngredient.name) {
      this.slService.addIngrendient(newIngredient);
    } else {
      alert('Please Enter Ingredient to be added!');
    }
  }
}
