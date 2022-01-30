import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = `${environment.baseURL}products`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductsByCategory(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}?categoryId_eq=${catId}`);
  }

  update(product:Product): Observable<Product>{
    return of(new Product);
  }

  remove(product:Product): Observable<Product>{
    return of(new Product())
  }
}
