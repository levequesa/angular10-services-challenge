import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../CocktailService';
import { Cocktail } from '../Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  Cocktails : Cocktail[]= [];
  constructor(public cocktailService : CocktailService) { }

  ngOnInit(): void {
    this.Cocktails = this.cocktailService .getCocktails();
  }
}
