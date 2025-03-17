import { Component } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import instagram from "../../data/instagram.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends HelperService {
  public insta:any[] = instagram;
}
