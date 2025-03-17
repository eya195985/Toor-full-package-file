import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseGridLeftComponent } from './cruise-grid-left.component';

const routes: Routes = [{ path: '', component: CruiseGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CruiseGridLeftRoutingModule { }
