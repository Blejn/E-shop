import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
<<<<<<< HEAD
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ShopComponent, FiltersComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule, ShopRoutingModule],
})
export class ShopModule {}
=======


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
>>>>>>> 53ced05a7f046a5e08ab8741e64d2be24c61c3e7
