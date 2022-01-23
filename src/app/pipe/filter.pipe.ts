import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], phrase: string): Product[] {
    return value.filter((a) => {
      let numberPhrase = parseInt(phrase);
      if (!isNaN(numberPhrase)) {
        return a.price === numberPhrase;
      } else {
        return (
          a.name.toLowerCase().includes(phrase.toLowerCase()) ||
          a.description.toLowerCase().includes(phrase.toLowerCase())
        );
      }
    });
  }
}
