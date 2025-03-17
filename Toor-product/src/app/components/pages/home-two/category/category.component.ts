import { Component, OnInit } from '@angular/core';
import data from "../../../data/ourcategory.json";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category: any[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
