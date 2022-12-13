import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent],
  imports: [AboutRoutingModule],
  providers: [],
})
export class AboutModule {}
