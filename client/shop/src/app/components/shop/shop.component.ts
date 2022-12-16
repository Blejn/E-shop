import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private filtersService: FiltersService) {}

  $filters = this.filtersService.$filters.pipe(debounceTime(600));
}
