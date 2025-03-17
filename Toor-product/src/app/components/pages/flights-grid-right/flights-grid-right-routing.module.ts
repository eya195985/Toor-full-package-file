import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsGridRightComponent } from './flights-grid-right.component';

const routes: Routes = [{ path: '', component: FlightsGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsGridRightRoutingModule { }
