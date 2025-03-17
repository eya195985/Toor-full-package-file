import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { FlightsGridRightRoutingModule } from './flights-grid-right-routing.module';
import { FlightsGridRightComponent } from './flights-grid-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    FlightsGridRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FlightsGridRightRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule,
    NgxPaginationModule
  ]
})
export class FlightsGridRightModule { }
