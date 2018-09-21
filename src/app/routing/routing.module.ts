import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from '../pages/front/front.component';

const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: ':slug', component: FrontComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
