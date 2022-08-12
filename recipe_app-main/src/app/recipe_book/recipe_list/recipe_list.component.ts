import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe_item/recipe_item.component';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe_list.component.html',
  styleUrls: ['./recipe_list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fa3fb2fb40f7208d148aed9ec2de15c8c%2F165576035120220620_172444.jpg&w=595&h=398&c=sc&poi=face&q=60'
    ),
    new Recipe(
      'Test2',
      'This is a test2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fa3fb2fb40f7208d148aed9ec2de15c8c%2F165576035120220620_172444.jpg&w=595&h=398&c=sc&poi=face&q=60'
    ),
  ];
}
