import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './components/about-us/about.module';
import { AccountModule } from './components/account/account.module';
import { AdministrationModule } from './components/administration/administration.module';
import { ContactModule } from './components/contact/contact.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShopModule } from './components/shop/shop.module';

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
  {
    path: 'shop',
    loadChildren: () => ShopModule,
  },
  {
    path: 'account',
    loadChildren: () => AccountModule,
  },
  { path: 'contact', loadChildren: () => ContactModule },
  { path: 'administration', loadChildren: () => AdministrationModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
