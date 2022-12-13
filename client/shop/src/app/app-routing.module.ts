import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './components/about-us/about.module';
import { AccountModule } from './components/account/account.module';
import { AdministrationModule } from './components/administration/administration.module';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',

    component: HomePageComponent,
  },
  {
    path: 'users',
    loadChildren: () => AdministrationModule,
  },
  {
    path: 'about',
    loadChildren: () => AboutModule,
  },
  // {
  //   path: 'shop',
  //   loadChildren: () => ShopModule,
  // },
  {
    path: 'account',
    loadChildren: () => AccountModule,
  },
  // { path: 'contact', loadChildren: () => ContactUsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
