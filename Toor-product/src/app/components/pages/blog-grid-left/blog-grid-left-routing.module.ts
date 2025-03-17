import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridLeftComponent } from './blog-grid-left.component';

const routes: Routes = [{ path: '', component: BlogGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridLeftRoutingModule { }
