import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from '../model/Filters';
import { Product } from '../model/Product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[] | null, searchFilters: Filters): Product[] | null {
    const searchFormFilters = Object.entries(searchFilters).filter(
      (entry) => entry[1]
    );
    if (value) {
      return value.filter((product) =>
        searchFormFilters.every((filterKeyVal) => {
          const filterKey = filterKeyVal[0] as keyof Product;
          const filterValue = filterKeyVal[1];
          const productFilterValue = product[filterKey];

          if (Array.isArray(productFilterValue)) {
            return productFilterValue.some((value) => value === filterValue);
          } else {
            return product[filterKey] === filterValue;
          }
        })
      );
    }
    return null;
  }
}
