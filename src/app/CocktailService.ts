import { Cocktail } from "./Cocktail";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CocktailService {

    cocktails : Cocktail[]=[
      {name: "punch", price : 8, img: "punch.com"},
      {name: "morito", price : 7, img: "morito.com"},
      {name: "gin Fizz", price : 10, img: "ginFizz.com"}
    ];

    getCocktails () : any {
      return this.cocktails;
    }

}
