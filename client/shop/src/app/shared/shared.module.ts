import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, HeaderComponent, ReactiveFormsModule],
})
export class SharedModule {}
