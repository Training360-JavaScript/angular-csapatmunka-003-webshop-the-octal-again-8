import { CategoryService } from './../../service/category.service';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  products: Product[] = [new Product()];
  categories: Observable<Category[]> = this.categoryService.getAll();
  phrase: string = ""; //SzaboZs: filter pipe-hoz
  filterKey: string = ""; //SzaboZs: filter pipe-hoz
  keys: string[] = Object.keys(new Product()).filter(key => { return !((key == 'id') || (key == 'catId')) }); //SzaboZs: filter pipe-hoz

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products => {
      this.products = products;
    }));
  }

  onDelete(product: Product) {
    this.productService.remove(product).subscribe();
  }

  onUpdate(product: Product) {
    this.productService.update(product).subscribe();
  }
}
