import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsGridLeftComponent } from './flights-grid-left.component';

const routes: Routes = [{ path: '', component: FlightsGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsGridLeftRoutingModule { }
