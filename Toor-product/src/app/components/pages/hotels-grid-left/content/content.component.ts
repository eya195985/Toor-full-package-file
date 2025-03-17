import { Component } from '@angular/core';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends HotelHelperService {

}
