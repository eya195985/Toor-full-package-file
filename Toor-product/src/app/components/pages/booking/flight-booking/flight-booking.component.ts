import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightHelperService } from 'src/app/components/helper/flight/flight-helper.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent extends FlightHelperService {
  bookingForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    verifyemail: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    meal: new FormControl(''),
    cardInfo: new FormGroup({
      cardtype: new FormControl('', [Validators.required]),
      cardname: new FormControl('', [Validators.required]),
      cardnumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
      expmonth: new FormControl('', [Validators.required]),
      expyear: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  });
  onSubmit() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset();
  }
}
