import { Product } from 'src/app/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  categories: Observable<Category[]>  = this.categoryService.getAll();
  constructor(
    private productService:ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    //FYI: itt iratkozok fel, nem async-el a view-ben mert több helyen is használjuk a products tömböt.
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

}
