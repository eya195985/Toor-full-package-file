import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsGridLeftComponent } from './cars-grid-left.component';

const routes: Routes = [{ path: '', component: CarsGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsGridLeftRoutingModule { }
