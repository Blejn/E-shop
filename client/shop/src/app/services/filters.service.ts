import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Filters } from '../model/Filters';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private $filtersValues = new Subject();

  set setFilters(filters: Filters) {
    this.$filtersValues.next(filters);
  }

  get $filters() {
    return this.$filtersValues as Subject<Filters>;
  }

  getFiltersOptions(products: Product[], filters: FormGroup<any>): typeof obj {
    const controls = Object.keys(filters.controls);
    const obj: { [key: string]: Set<string | number> } = {};

    controls.forEach(
      (control) =>
        (obj[control] = new Set(
          products
            .map((product) => product[control as keyof Filters])
            .filter((x) => x !== null || undefined)
            .flat()
        ))
    );
    return obj;
  } // private metoda do pobierania mozliwych wartosci do selectow w filtrach
}
