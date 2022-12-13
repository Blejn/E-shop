import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, AdministrationRoutingModule],
  exports: [UsersListComponent],
})
export class AdministrationModule {}
