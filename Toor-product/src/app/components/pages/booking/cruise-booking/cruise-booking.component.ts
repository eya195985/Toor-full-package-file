import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CruiseHelperService } from 'src/app/components/helper/cruise/cruise-helper.service';

@Component({
  selector: 'app-cruise-booking',
  templateUrl: './cruise-booking.component.html',
  styleUrls: ['./cruise-booking.component.css']
})
export class CruiseBookingComponent extends CruiseHelperService {
  bookingForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    verifyemail: new FormControl('', [Validators.required]),
    citizenship: new FormControl('', [Validators.required]),
    dateofbirth: new FormControl('', [Validators.required]),
    genderInfo: new FormGroup({
      gender: new FormControl('Male', [Validators.required]),
    }),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
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
