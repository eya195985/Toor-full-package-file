import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsGridComponent } from './hotels-grid.component';

const routes: Routes = [{ path: '', component: HotelsGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsGridRoutingModule { }
