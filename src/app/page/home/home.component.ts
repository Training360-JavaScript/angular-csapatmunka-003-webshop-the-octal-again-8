import { Product } from 'src/app/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[] =[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.list;
  }

}
