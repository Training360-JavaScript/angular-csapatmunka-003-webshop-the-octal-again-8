import { Injectable } from '@angular/core';
import * as data from '../model/categories.json';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categories: Category[] = Array.from((data as any).default);

  constructor() { }
}
