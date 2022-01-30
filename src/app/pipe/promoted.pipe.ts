import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'promoted'
})
export class PromotedPipe implements PipeTransform {

  transform(value: Product[]|null, arg: number = 5): Product[]|null {
    if (!value) return value;
    return value.filter((a)=>!!a.promotedPrice).slice(0, arg);
  }

}
