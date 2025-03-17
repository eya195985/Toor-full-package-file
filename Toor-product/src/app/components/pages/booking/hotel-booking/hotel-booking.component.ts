import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent extends HotelHelperService {
  bookingForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    verifyemail: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    cardInfo: new FormGroup({
      cardtype: new FormControl('', [Validators.required]),
      cardname: new FormControl('', [Validators.required]),
      cardnumber: new FormControl('', [Validators.required,Validators.minLength(16)]),
      cvv: new FormControl('', [Validators.required,Validators.minLength(3)]),
      expmonth: new FormControl('', [Validators.required]),
      expyear: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  });
  onSubmit() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset();
  }
}
