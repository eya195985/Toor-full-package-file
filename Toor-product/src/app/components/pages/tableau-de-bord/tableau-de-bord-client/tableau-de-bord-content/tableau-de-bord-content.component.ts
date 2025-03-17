import { Component, OnInit } from '@angular/core';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';
import data from 'src/app/components/data/counter.json';

@Component({
  selector: 'app-tableau-de-bord-content',
  templateUrl: './tableau-de-bord-content.component.html',
  styleUrls: ['./tableau-de-bord-content.component.css']
})
export class TableauDeBordContentComponent implements OnInit {

  selectedTab = 1; // L'onglet par défaut est le premier

  // Méthode pour sélectionner un onglet
  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  // Implémentation de la méthode ngOnInit
  ngOnInit(): void {
    // Initialisation ou logique à exécuter lors de l'initialisation du composant
    console.log('ContentComponent initialized');
  }


}
