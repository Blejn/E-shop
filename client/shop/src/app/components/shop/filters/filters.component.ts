import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first, Subscription } from 'rxjs';
import { Filters } from 'src/app/model/Filters';
import { Product } from 'src/app/model/Product';
import { FiltersService } from 'src/app/services/filters.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private filtersService: FiltersService,
    private productService: ProductService
  ) {}

  filters = this.fb.group({
    author: [],
    bpm: [],
    key: [],
    price: [],
    category: [],
  });

  $filtersValues = this.filters.valueChanges;
  filtersSelectOptions: { [key: string]: Set<string | number> } = {};

  subscriptions?: Subscription[];

  private getFiltersOptions(products: Product[]): typeof obj {
    const controls = Object.keys(this.filters.controls);
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

  ngOnInit(): void {
    const filtersSubscription = this.$filtersValues.subscribe((val) => {
      this.filtersService.setFilters = val;
    });
    this.subscriptions?.push(filtersSubscription);

    this.productService
      .getProducts()
      .pipe(first())
      .subscribe((products) => {
        this.filtersSelectOptions = this.getFiltersOptions(products);
        console.log(this.filtersSelectOptions);
      });
  } // trzeba to oddelegowac do serwisu, odczytywanie mozliwych do wyboru wartosci do <select> albo wymyslic inny sposob :)))

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }
}
