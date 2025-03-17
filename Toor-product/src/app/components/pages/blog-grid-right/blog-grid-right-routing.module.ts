import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridRightComponent } from './blog-grid-right.component';

const routes: Routes = [{ path: '', component: BlogGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridRightRoutingModule { }
