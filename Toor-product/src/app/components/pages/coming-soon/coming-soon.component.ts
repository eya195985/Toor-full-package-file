import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }
  text: any = {
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds"
  };

  ngOnInit(): void {
  }

}
