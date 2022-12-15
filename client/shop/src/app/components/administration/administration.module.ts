import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [AdministrationComponent, UsersListComponent],
  imports: [CommonModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
