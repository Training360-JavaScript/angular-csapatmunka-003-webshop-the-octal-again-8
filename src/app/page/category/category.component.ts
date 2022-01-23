import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id: Observable<number> = this.activatedRoute.params.pipe(
    map(params => params['catId'])
  );

  catId: number = 0;
  category: Category = new Category();
  products: Product[] = [new Product()];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.id.subscribe((catId: number) => {
      this.catId = +catId;
      this.category = this.categoryService.categories.find(el => el.id === this.catId) || new Category();
      //TODO: Nav to 404 if not found

      //load products
      this.products = this.productService.getProductsByCategory(this.catId);
    });
  }

}
