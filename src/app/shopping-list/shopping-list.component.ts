import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'cb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  private items;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
