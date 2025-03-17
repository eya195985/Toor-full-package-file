import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CountdownModule } from "ng2-countdown-timer";

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    SharedModule,
    NgbModule,
    CountdownModule
  ]
})
export class ComingSoonModule { }
