import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {


  @Input() cardList: ProductCardComponent[] = [];

  n: number = this.cardList.length;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(12 / this.n);
    console.log(this.n);
  }

}
