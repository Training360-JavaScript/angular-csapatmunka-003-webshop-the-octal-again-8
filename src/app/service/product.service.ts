import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = `${environment.baseURL}products`;
  httpOptions: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}?_expand=category`);
  }

  getProductsByCategory(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}&categoryId_eq=${catId}`);
  }

  update(product:Product): Observable<Product>{
    return this.http.patch<Product>(`${this.apiURL}/${product.id}`, product);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product);
  }

  remove(product:Product): Observable<Product>{
    return this.http.delete<any>(`${this.apiURL}/${product.id}`);
  }
}
