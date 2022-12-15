import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
