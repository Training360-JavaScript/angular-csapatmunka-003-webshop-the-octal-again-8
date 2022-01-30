import { Observable } from 'rxjs';
import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import * as data from '../model/data.json';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public list: Product[] = Array.from((data as any).default);

  constructor(private categories: CategoryService) {
    //Assign category name to products
    this.list.forEach(product => {
      product.catName = this.categories.categories.find(el => el.id === product.catId)?.name || '';
    });

    //gen 5 random promoted
    let promotedNum = 0;
    const possiblePromotes = [5, 10, 15, 20, 25];
    const activeNum = this.list.filter(el => el.active).length;
    const maxPromoted = activeNum > 5 ? 5 : activeNum;

    do {
      const item = this.list[Math.floor(Math.random() * this.list.length)];
       if(item.active && !item.promotedPrice) {
        item.promotedPrice = Math.round(item.price * ((100 - possiblePromotes[Math.floor(Math.random() * possiblePromotes.length)]) / 100));
        promotedNum += 1;
      }
    } while (promotedNum < maxPromoted);
  }

  getProductsByCategory(catId: number) {
    return this.list.filter(el => el.catId === catId);
  }

  update(product:Product):Observable<Product>{
    return new Observable();
  }

  remove(product:Product):Observable<unknown>{
    return new Observable();
  }
}
