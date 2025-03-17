import { Component } from '@angular/core';
import { FlightHelperService } from '../../helper/flight/flight-helper.service';

@Component({
  selector: 'app-flight-sidebar',
  templateUrl: './flight-sidebar.component.html',
  styleUrls: ['./flight-sidebar.component.css']
})
export class FlightSidebarComponent extends FlightHelperService {

}
