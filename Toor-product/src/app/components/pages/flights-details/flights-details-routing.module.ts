import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsDetailsComponent } from './flights-details.component';

const routes: Routes = [{ path: '', component: FlightsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsDetailsRoutingModule { }
