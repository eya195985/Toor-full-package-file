import { Component } from '@angular/core';
import { HotelHelperService } from '../../helper/hotel/hotel-helper.service';

@Component({
  selector: 'app-hotel-sidebar',
  templateUrl: './hotel-sidebar.component.html',
  styleUrls: ['./hotel-sidebar.component.css']
})
export class HotelSidebarComponent extends HotelHelperService {

}
