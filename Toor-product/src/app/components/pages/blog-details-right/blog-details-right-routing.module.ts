import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsRightComponent } from './blog-details-right.component';

const routes: Routes = [{ path: '', component: BlogDetailsRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsRightRoutingModule { }
