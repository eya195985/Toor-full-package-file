import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDetailsComponent } from './hotels-details.component';

const routes: Routes = [{ path: '', component: HotelsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsDetailsRoutingModule { }
