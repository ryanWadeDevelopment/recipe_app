import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe_book/recipe_book.component';
import { RecipeDetailComponent } from './recipe_book/recipe_detail/recipe_detail.component';
import { RecipeListComponent } from './recipe_book/recipe_list/recipe_list.component';
import { RecipeItemComponent } from './recipe_book/recipe_list/recipe_item/recipe_item.component';
import { ShoppingListComponent } from './shopping_list/shopping_list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping_list_edit/shopping_list_edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
