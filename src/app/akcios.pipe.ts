import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product.model';

@Pipe({
  name: 'akcios'
})
export class AkciosPipe implements PipeTransform {

  transform(value: Product[], arg: number = 5): Product[] {
    return value.filter((a)=>{!!a.promotedPrice}).slice(0, arg - 1);
  }

}
