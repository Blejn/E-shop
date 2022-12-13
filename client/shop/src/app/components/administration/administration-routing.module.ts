import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const administrationRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usersList' },
  { path: 'usersList', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(administrationRoutes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
