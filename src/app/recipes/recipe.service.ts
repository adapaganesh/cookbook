import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  private recipes : Recipe[] = [
   new Recipe('Hyderabad Biryani', "Chicken Biryani", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",[new Ingredient('Country Chicken',250), new Ingredient('Basmathi Rice', 500)]),
   new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[]),
   new Recipe('Summer Salad', 'Okayish', 'http://www.taste.com.au/images/recipes/sfi/2012/11/barbecued-corn-and-chorizo-salad-25337_l.jpeg',[])
 ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe( id: number ) {
      return this.recipes[id];
  }

  deleteRecipe ( id: number ) {
    delete this.recipes[id];
  }
}
