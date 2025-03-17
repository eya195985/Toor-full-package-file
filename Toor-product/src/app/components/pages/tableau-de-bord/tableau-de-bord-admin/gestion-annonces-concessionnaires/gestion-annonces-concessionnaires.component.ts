import { Component, OnInit } from '@angular/core';
import { AnnonceService ,Annonce} from 'src/app/components/pages/tableau-de-bord/services/annonce.service';

@Component({
  selector: 'app-gestion-annonces-concessionnaires',
  templateUrl: './gestion-annonces-concessionnaires.component.html',
  styleUrls: ['./gestion-annonces-concessionnaires.component.css']
})
export class GestionAnnoncesConcessionnairesComponent implements OnInit {

  annonces: Annonce[] = []; // Utilisez l'interface Annonce
  isLoading = false;

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.loadAnnonces();
  }

  loadAnnonces(): void {
    this.isLoading = true;
    this.annonceService.getAnnoncesEnAttente().subscribe(
      (data: Annonce[]) => {
        this.annonces = data;
        console.log('Annonces chargées :', this.annonces); // Afficher les données dans la console
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Erreur lors du chargement des annonces', error);
      }
    );
  }

   changeStatus(idAnnonce: number, status: string): void {
      this.isLoading = true;
      this.annonceService.updateAnnonceStatus(idAnnonce, status).subscribe(
        (response) => {

          this.loadAnnonces(); // Recharger les annonces
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;

          console.error('Erreur lors de la mise à jour du statut', error);
        }
      );
    }
}
