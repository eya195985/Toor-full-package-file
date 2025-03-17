import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseGridRightComponent } from './cruise-grid-right.component';

const routes: Routes = [{ path: '', component: CruiseGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CruiseGridRightRoutingModule { }
