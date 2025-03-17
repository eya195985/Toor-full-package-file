import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsGridRightComponent } from './hotels-grid-right.component';

const routes: Routes = [{ path: '', component: HotelsGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsGridRightRoutingModule { }
