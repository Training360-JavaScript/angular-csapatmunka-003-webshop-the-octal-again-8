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
  categories?: Category[];
  phrase: string = ""; //SzaboZs: filter pipe-hoz
  filterKey: string = ""; //SzaboZs: filter pipe-hoz
  keys: string[] = Object.keys(new Product()).filter(key => { return !((key == 'id') || (key == 'image')) }); //SzaboZs: filter pipe-hoz
  newProduct?: Product;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe(catList => {
      this.categories = catList;
    })
  }

  loadProducts(): void {
    this.productService.getAll().forEach((products => {
      this.products = products;
      this.keys.unshift('category');
    }));
  };

  createProduct(): void {
    this.newProduct = new Product();
  }
  cancelAddNew(): void {
    this.newProduct = undefined;
  }

  onSaveNewProduct(product: Product): void {
    this.productService.create(product).forEach(newProduct => {
      //this.products.unshift(newProduct); because of missing category data, we are refreshing the whole table. dirty but works for now
      this.loadProducts();
      this.newProduct = undefined;
    });
  }

  onDelete(product:Product){
    this.productService.remove(product).subscribe(
      () => {
        this.products = this.products.filter(productitem => {
          return productitem.id !== product.id
        })
      }
    );
  }

  onUpdate(product: Product) {
    this.productService.update(product).subscribe();
  }
}
