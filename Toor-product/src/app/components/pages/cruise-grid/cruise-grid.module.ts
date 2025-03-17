import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { CruiseGridRoutingModule } from './cruise-grid-routing.module';
import { CruiseGridComponent } from './cruise-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    CruiseGridComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    CruiseGridRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule,
    NgxPaginationModule
  ]
})
export class CruiseGridModule { }
