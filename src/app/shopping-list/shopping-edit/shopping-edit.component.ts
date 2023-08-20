import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
// model
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() addedIngredient = new EventEmitter<Ingredient>()

  onAddIngredient() {
    const igName = this.nameInputRef.nativeElement.value;
    const igAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(igName, igAmount);
    if (newIngredient.amount && newIngredient.name) {
      this.addedIngredient.emit(newIngredient);
    } else {
      alert('Please Enter Ingredient to be added!')
    }
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
