import { Component } from '@angular/core';
import { CarHelperService } from 'src/app/components/helper/cars/car-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends CarHelperService {

}
