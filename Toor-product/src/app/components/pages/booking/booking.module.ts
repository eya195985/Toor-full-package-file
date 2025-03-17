import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { CruiseBookingComponent } from './cruise-booking/cruise-booking.component';
import { CarBookingComponent } from './car-booking/car-booking.component';


@NgModule({
  declarations: [
    BookingComponent,
    ContentComponent,
    HotelBookingComponent,
    FlightBookingComponent,
    CruiseBookingComponent,
    CarBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule
  ]
})
export class BookingModule { }
