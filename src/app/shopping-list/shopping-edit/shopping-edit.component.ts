import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
// model
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  subscription: Subscription;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.editingItem.subscribe((index) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onSubmitIngredient(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);

    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngrendient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.slForm.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
