import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from '../pipes/filter-product.pipe';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, FilterProductPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CardComponent,
    HeaderComponent,
    ReactiveFormsModule,
    FilterProductPipe,
  ],
})
export class SharedModule {}
