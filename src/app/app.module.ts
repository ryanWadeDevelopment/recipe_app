import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe_book/recipe_book.component';
import { RecipeDetailComponent } from './recipe_book/recipe_detail/recipe_detail.component';
import { RecipeItemComponent } from './recipe_book/recipe_item/recipe_item.component';
import { RecipeListComponent } from './recipe_book/recipe_list/recipe_list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
