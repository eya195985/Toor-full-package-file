import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BlogGridRightRoutingModule } from './blog-grid-right-routing.module';
import { BlogGridRightComponent } from './blog-grid-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogGridRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogGridRightRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class BlogGridRightModule { }
