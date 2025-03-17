import { Component } from '@angular/core';
import { FlightHelperService } from 'src/app/components/helper/flight/flight-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends FlightHelperService {
  settingsTesti = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false,
    dots: false,
    cssEase: 'linear',
  };
}
