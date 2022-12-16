import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ShopComponent, FiltersComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule, ShopRoutingModule],
})
export class ShopModule {}
