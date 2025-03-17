import { Component, OnInit } from '@angular/core';
import gallery from '../../../data/gallery/gallery.json';
import category from '../../../data/gallery/category.json';
import { Category } from '../../../helper/filter/category';
import { Item } from '../../../helper/filter/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public activeItem: number;
  constructor() {
    this.activeItem = 0;
  }
  // Filter
  items: Item[] = gallery;
  category: Category[] = category;
  filteredItems: Item[] | Item[] = [] = [...this.items];
  filterItemsByCategory(category: Category, id: number) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(parseInt(category.id));
    });
    this.activeItem = id
  }
  reset(id: number) {
    this.filteredItems = [...this.items];
    this.activeItem = id
  }
  ngOnInit(): void {
  }

}
