import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = {
    id: 1,
    recipeName: 'hotwings',
    cuisine: 'american',
  };

  recipes: Recipe[];

  //retrieve recipes from service
  getRecipes(): void {
    this.recipeService.getRecipes()
     .subscribe(recipes => this.recipes = recipes);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes()
  }

  //assigns clicked recipe from template to components selectedRecipe
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  
  

  




}


