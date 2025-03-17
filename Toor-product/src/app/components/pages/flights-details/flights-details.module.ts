import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';

import { FlightsDetailsRoutingModule } from './flights-details-routing.module';
import { FlightsDetailsComponent } from './flights-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    FlightsDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FlightsDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule
  ]
})
export class FlightsDetailsModule { }
