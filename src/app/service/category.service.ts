import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL: string = `${environment.baseURL}categories`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL);
  }

  getOne(catId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiURL}/${catId}`);
  }

}
