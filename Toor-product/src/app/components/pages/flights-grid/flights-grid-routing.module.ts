import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsGridComponent } from './flights-grid.component';

const routes: Routes = [{ path: '', component: FlightsGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsGridRoutingModule { }
