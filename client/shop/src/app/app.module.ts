import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdministrationModule } from './components/administration/administration.module';
import { UsersListService } from './services/users-list.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionBannerComponent } from './components/home-page/promotion-banner/promotion-banner.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PromotionBannerComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdministrationModule,
  ],
  providers: [UsersListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
