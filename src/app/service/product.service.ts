import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import * as data from '../model/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public list: Product[] = Array.from((data as any).default);

  constructor() {}
}
