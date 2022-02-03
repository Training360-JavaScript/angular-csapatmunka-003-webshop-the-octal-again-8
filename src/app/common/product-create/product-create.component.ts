import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  @Input() product!: Product;
  @Input() categories: Category[] | null = [new Category()];

  @Output() closeWithoutSaving: EventEmitter<void> = new EventEmitter();
  @Output() saveNewProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseWithOutSaving(): void {
    this.closeWithoutSaving.emit();
  }

  onSaveNewProduct(product: Product): void {
    this.saveNewProduct.emit(product);
  } 

}
