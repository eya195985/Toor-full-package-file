import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.css']
})
export class ProgressionBarComponent {
  @Input() progression: number = 0; // Propriété d'entrée pour la progression
  @Input() etapeActuelle: number = 1; // Propriété d'entrée pour l'étape actuelle
}
