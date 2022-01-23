import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input() cardList: Product[] = [];

  n: number = this.cardList.length;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(12 / this.n);
  }

}
