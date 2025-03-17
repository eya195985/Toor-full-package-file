import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BlogGridLeftRoutingModule } from './blog-grid-left-routing.module';
import { BlogGridLeftComponent } from './blog-grid-left.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogGridLeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogGridLeftRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class BlogGridLeftModule { }
