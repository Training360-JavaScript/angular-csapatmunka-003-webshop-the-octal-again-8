import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {


  @Input() cardList: ProductCardComponent[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
