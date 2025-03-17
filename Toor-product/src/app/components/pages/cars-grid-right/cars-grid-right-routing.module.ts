import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsGridRightComponent } from './cars-grid-right.component';

const routes: Routes = [{ path: '', component: CarsGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsGridRightRoutingModule { }
