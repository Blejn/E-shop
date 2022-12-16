import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private filtersService: FiltersService
  ) {}

  filters = this.fb.group({
    author: [],
    bpm: [],
    key: [],
    price: [],
    graphic: [],
    category: [],
  });

  $filtersValues = this.filters.valueChanges;

  subscriptions?: Subscription[];

  ngOnInit(): void {
    const filtersSubscription = this.$filtersValues.subscribe((val) => {
      this.filtersService.setFilters = val;
    });
    this.subscriptions?.push(filtersSubscription);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }
}
