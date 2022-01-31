import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[] | null, phrase: string = '', key: string = ''): Product[] | null {

    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    if (!key) { //ha a pipe-ban nem adunk meg oszlop-kulcsot, akkor a korábban elkészített szűrést produkálja
      //if(!value) return value;
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
    } else { //ha mindhárom paraméter adott, akkor az adott kulcsú mező alapján szűr:
      phrase = phrase.toLowerCase();
      return value.filter(item => {
        const data = String(item[key]).toLowerCase();
        return data.includes(phrase);
      });

    }






  }
}
