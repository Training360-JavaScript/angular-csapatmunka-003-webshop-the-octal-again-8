import { Product } from './../../model/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: '[app-two-way-editor]',
  templateUrl: './two-way-editor.component.html',
  styleUrls: ['./two-way-editor.component.scss'],
})
export class TwoWayEditorComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() categories!: Category[] | null;

  @Output() delProduct: EventEmitter<Product> = new EventEmitter();
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter();

  isEditable: boolean = false;
  imageBaseURL: string = `${environment.baseURL}product_images/`;

  constructor() {}

  ngOnInit(): void {}

  compareFn(c1: Category, c2: Category): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onDelete(product: Product): void {
    this.delProduct.emit(product);
  }

  onUpdate(product: Product): void {
    this.updateProduct.emit(product);
    this.isEditable = false;
  }
}
