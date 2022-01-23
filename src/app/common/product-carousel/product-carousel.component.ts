import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input() cardList: Product[] = [];
  //cardlist = [new Product(), new Product(), new Product(), new Product(), new Product()];

  //n!: number;

  constructor() { }

  ngOnInit(): void {
    /*     this.n = this.cardList.length;
        console.log(this.n);
        this.n = Math.floor(12 / this.n);
     */
  }
}
