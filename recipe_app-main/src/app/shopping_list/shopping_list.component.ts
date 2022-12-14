import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListEditComponent } from './shopping_list_edit/shopping_list_edit.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping_list.component.html',
  styleUrls: ['./shopping_list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
}
