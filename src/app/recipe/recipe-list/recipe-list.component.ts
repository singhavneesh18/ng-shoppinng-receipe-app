import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [new Recipe('Recipe 1', 'Test Dec', 'https://th.bing.com/th/id/R.49d77df53f5da72f86202a0ec9b667e2?rik=mNaBDVogpk7OKQ&riu=http%3a%2f%2fstatic1.businessinsider.com%2fimage%2f554cbc9e69bedd0f1dd97cdf%2fgoogle-now-lets-you-order-food-delivery-right-from-its-search-results-pages.jpg&ehk=cllESkxpUIW8RfNcvClQwi1NPqkoQi9y9Wt2bkw9eMU%3d&risl=&pid=ImgRaw&r=0')];

  constructor() { }

  ngOnInit(): void {
  }

}
