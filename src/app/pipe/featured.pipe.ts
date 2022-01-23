import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: Product[], arg: number = 5): Product[] {
    return value.filter((a)=>{a.featured}).slice(0, arg - 1);
  }

}
