import { Component, OnInit } from '@angular/core';
import data from '../../../data/service.json';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public service:any[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
