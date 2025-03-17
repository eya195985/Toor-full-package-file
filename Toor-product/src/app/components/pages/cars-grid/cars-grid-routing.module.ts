import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsGridComponent } from './cars-grid.component';

const routes: Routes = [{ path: '', component: CarsGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsGridRoutingModule { }
