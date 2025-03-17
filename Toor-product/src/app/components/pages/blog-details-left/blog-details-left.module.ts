import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogDetailsLeftRoutingModule } from './blog-details-left-routing.module';
import { BlogDetailsLeftComponent } from './blog-details-left.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogDetailsLeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsLeftRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogDetailsLeftModule { }
