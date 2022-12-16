import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Filters } from '../model/Filters';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private $filtersValues = new Subject();
  constructor() {}

  set setFilters(filters: Filters) {
    this.$filtersValues.next(filters);
  }

  get $filters() {
    return this.$filtersValues as Subject<Filters>;
  }
}
