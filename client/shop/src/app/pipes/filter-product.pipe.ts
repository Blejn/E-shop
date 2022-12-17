import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from '../model/Filters';
import { Product } from '../model/Product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[] | null, searchValues: Filters): Product[] | null {
    const usedFilters = Object.entries(searchValues).filter(
      (entry) => entry[1]
    );
    if (value) {
      return value.filter((product) =>
        usedFilters.every((filter) => {
          const matchingFilterValue = product[filter[0]];
          if (Array.isArray(matchingFilterValue)) {
            return matchingFilterValue.some((value) => value === filter[1]);
          } else {
            return product[filter[0]] === filter[1];
          }
        })
      );
    }
    return null;
  }
}
