import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input() cardList!: Product[]|null;
  @Input() hideDescription: boolean = false;


  constructor() { }

  ngOnInit(): void { }
}
