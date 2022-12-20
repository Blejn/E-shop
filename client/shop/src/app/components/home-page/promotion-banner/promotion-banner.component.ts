import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss'],
})
export class PromotionBannerComponent implements OnInit {
  products!: Product[];
  constructor(private productsService: ProductService) {}
  ngOnInit() {
    this.loadPromotionProducts();
  }

  loadPromotionProducts(): void {
    this.productsService.getPromotionProduts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
