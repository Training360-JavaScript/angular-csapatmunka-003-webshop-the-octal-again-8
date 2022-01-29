import { Product } from 'src/app/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[] = this.productService.list;
  categories: Category[] = this.categoryService.categories;
  constructor(
    private productService:ProductService,
    private categoryService: CategoryService  
  ) { }

  ngOnInit(): void {}

}
