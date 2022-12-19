import { Component } from '@angular/core';
<<<<<<< HEAD
import { debounceTime, first } from 'rxjs';
=======
import { debounceTime } from 'rxjs';
>>>>>>> master
import { FiltersService } from 'src/app/services/filters.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
<<<<<<< HEAD
  constructor(
    private filtersService: FiltersService,
    private productService: ProductService
  ) {}

  $filters = this.filtersService.$filters.pipe(debounceTime(600));
  $products = this.productService.getProducts().pipe(first());
=======
  constructor(private filtersService: FiltersService) {}

  $filters = this.filtersService.$filters.pipe(debounceTime(600));
>>>>>>> master
}
