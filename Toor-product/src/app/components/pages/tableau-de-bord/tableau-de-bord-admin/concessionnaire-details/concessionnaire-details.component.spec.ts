import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';

@Component({
  selector: 'app-concessionnaire-details',
  templateUrl: './concessionnaire-details.component.html',
  styleUrls: ['./concessionnaire-details.component.css']
})
export class ConcessionnaireDetailsComponent implements OnInit {
  concessionnaire: any;
  utilisateur: any;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID from route:', idParam);
    if (idParam !== null) {
      const id = +idParam;
      console.log('Concessionnaire ID:', id);
      this.voyageService.getConcessionnaireById(id).subscribe(
        data => {
          this.concessionnaire = data;
          console.log('Concessionnaire data:', data);

          // Récupérer les détails de l'utilisateur lié
          if (this.concessionnaire.idUtilisateur) {
            this.voyageService.getUtilisateurById(this.concessionnaire.idUtilisateur).subscribe(
              userData => {
                this.utilisateur = userData;
                console.log('Utilisateur data:', userData);
              },
              error => {
                console.error('Erreur lors du chargement des détails de l\'utilisateur', error);
              }
            );
          } else {
            console.error('ID utilisateur non trouvé dans les données du concessionnaire.');
          }
        },
        error => {
          console.error('Erreur lors du chargement des détails du concessionnaire', error);
        }
      );
    } else {
      console.error('ID du concessionnaire non trouvé dans les paramètres de la route.');
    }
  }
}
