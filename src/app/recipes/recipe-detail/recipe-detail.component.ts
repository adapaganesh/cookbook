import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

import {Recipe} from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'cb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription : Subscription;
  private recipeInd : number;
  private selectedRecipe: Recipe;
  constructor(private sls : ShoppingListService,
              private routes : ActivatedRoute,
              private recipeServices : RecipeService,
              private router : Router)
  { }

  ngOnInit() {
    this.subscription = this.routes.params.subscribe(
      ( params: any ) => {
        this.recipeInd = params['id'];
        this.selectedRecipe = this.recipeServices.getRecipe(this.recipeInd);
      }
    );
  }

  onAddToShopList(){
      this.sls.addItems(this.selectedRecipe.ingredient);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeInd, 'edit']);
  }

  onDelete( ){
    this.recipeServices.deleteRecipe(this.recipeInd);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
