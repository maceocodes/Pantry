import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RECIPES } from '../../mock-recipes';

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

  recipes = RECIPES;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


