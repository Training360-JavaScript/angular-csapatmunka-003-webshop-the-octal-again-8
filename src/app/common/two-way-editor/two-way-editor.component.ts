import { Product } from './../../model/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';


@Component({
  selector: '[app-two-way-editor]',
  templateUrl: './two-way-editor.component.html',
  styleUrls: ['./two-way-editor.component.scss']
})
export class TwoWayEditorComponent implements OnInit {


   @Input() product :Product = new Product();

   @Input() categories: Category[] = [];

   @Output() delProduct:EventEmitter<Product> = new EventEmitter();

   @Output() updateProduct:EventEmitter<Product> = new EventEmitter();

   isEditable:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(product:Product):void {
    this.delProduct.emit(product);
  }

  onUpdate(product:Product):void{
    this.updateProduct.emit(product);
    this.isEditable=false;
  }

}
