import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsGridLeftComponent } from './hotels-grid-left.component';

const routes: Routes = [{ path: '', component: HotelsGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsGridLeftRoutingModule { }
