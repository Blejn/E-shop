import { NgModule } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  exports: [AccountComponent],
  imports: [AccountRoutingModule],
  providers: [],
})
export class AccountModule {}
