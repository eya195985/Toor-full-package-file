import { Component } from '@angular/core';
import { CarHelperService } from '../../helper/cars/car-helper.service';

@Component({
  selector: 'app-car-sidebar',
  templateUrl: './car-sidebar.component.html',
  styleUrls: ['./car-sidebar.component.css']
})
export class CarSidebarComponent extends CarHelperService {

}
