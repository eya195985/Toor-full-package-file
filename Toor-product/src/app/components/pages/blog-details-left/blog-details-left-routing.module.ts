import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsLeftComponent } from './blog-details-left.component';

const routes: Routes = [{ path: '', component: BlogDetailsLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsLeftRoutingModule { }
