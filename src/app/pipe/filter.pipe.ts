import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], phrase: string): Product[] {
    return value.filter((a)=>{a.name.localeCompare(phrase)});
  }

}
