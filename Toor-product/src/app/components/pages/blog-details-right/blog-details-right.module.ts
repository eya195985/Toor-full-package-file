import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogDetailsRightRoutingModule } from './blog-details-right-routing.module';
import { BlogDetailsRightComponent } from './blog-details-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogDetailsRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRightRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogDetailsRightModule { }
