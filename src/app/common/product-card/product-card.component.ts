import { Product } from './../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() hideDescription: boolean = false;

  imageBaseURL: string = `${environment.baseURL}product_images/`;

  constructor() { }

  ngOnInit(): void {
  }

}
