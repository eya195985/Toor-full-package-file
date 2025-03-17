import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';

import { CruiseDetailsRoutingModule } from './cruise-details-routing.module';
import { CruiseDetailsComponent } from './cruise-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    CruiseDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    CruiseDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule
  ]
})
export class CruiseDetailsModule { }
