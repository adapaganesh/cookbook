import {Ingredient} from '../recipes/ingredient'
export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() {
   }
  getItems(){
    return this.items;
  }
  addItems(items: Ingredient[] ){
      console.log("items:: ", items)
      console.log("this.items:: ", this.items)
      Array.prototype.push.apply(this.items, items);
  }
}
