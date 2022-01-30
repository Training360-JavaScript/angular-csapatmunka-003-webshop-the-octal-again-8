import { CategoryService } from './../../service/category.service';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  products: Product[] = [new Product()];
  categories:Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService:CategoryService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products => this.products));
    this.categories = this.categoryService.categories;
  }

  onDelete(product:Product){
    this.productService.remove(product).subscribe();
  }

  onUpdate(product:Product){
    this.productService.update(product).subscribe();
  }
}
