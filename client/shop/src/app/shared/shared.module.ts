import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [CardComponent, HeaderComponent],
})
export class SharedModule {}
