import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgenceService } from 'src/app/components/pages/tableau-de-bord/services/agence.service';
import { VoyageService, Utilisateur } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'; // Importations ajoutées
import { HttpErrorResponse } from '@angular/common/http'; // Importation ajoutée

@Component({
  selector: 'app-concessionnaire-details',
  templateUrl: './concessionnaire-details.component.html',
  styleUrls: ['./concessionnaire-details.component.css']
})
export class ConcessionnaireDetailsComponent implements OnInit {
  concessionnaire: any = null; // Initialisation à null pour éviter les erreurs
  utilisateur: Utilisateur | null = null; // Utilisation du type Utilisateur
  imagePreview: string | ArrayBuffer | null = null;
  userId: string | undefined; // Ou `userId: string = '';` pour une chaîne vide par défaut
  successMessage: string | null = null;
  errorMessage: string | null = null;
  logoUrl: SafeUrl | null = null; // Utilisez SafeUrl pour stocker l'URL sécurisée
  defaultLogoUrl = 'assets/images/eyat.jpg'; // Image par défaut

  isSidebarCollapsed = false;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private agenceService: AgenceService,
    private sanitizer: DomSanitizer // Injectez DomSanitizer
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID from route:', idParam);

    if (idParam !== null) {
      const id = +idParam;
      console.log('Concessionnaire ID:', id);

      // Récupérer les détails du concessionnaire
      this.voyageService.getConcessionnaireById(id).subscribe(
        (data: any) => {
          this.concessionnaire = data;
          console.log('Concessionnaire data:', data);

          // Vérifier si l'utilisateur est présent dans les données du concessionnaire
          if (this.concessionnaire.utilisateur && this.concessionnaire.utilisateur.idUtilisateur) {
            const userId = this.concessionnaire.utilisateur.idUtilisateur;
            console.log('User ID from concessionnaire data data  data:', userId);

            // Récupérer les détails de l'utilisateur
            this.voyageService.getUtilisateurById(userId).subscribe(
              (userData: any) => {
                this.utilisateur = userData;
                console.log('Utilisateur data:', userData);
              },
              (error: HttpErrorResponse) => {
                console.error('Erreur lors du chargement des détails de l\'utilisateur', error);
              }
            );

            // Récupérer le logo de l'utilisateur
            this.agenceService.getConcessionnaireByUserId(userId).subscribe(
              (data: any) => {
                console.log('Données du concessionnaire reçues hethi logog :', data);
                this.concessionnaire = data;

                // Utiliser directement la chaîne base64 du logo si elle est disponible
                if (data.logo) {
                  const objectUrl = `data:image/png;base64,${data.logo}`; // Créer une URL de données
                  this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl); // Sécurisez l'URL
                } else {
                  console.warn('Aucun logo trouvé dans les données du concessionnaire.');
                  this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(this.defaultLogoUrl); // Utiliser l'image par défaut
                }
              },
              (error: HttpErrorResponse) => {
                console.error('Erreur lors de la récupération des informations du concessionnaire :', error);
              }
            );
          } else {
            console.warn('Aucun ID utilisateur trouvé dans les données du concessionnaire.');
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors du chargement des détails du concessionnaire', error);
        }
      );
    } else {
      console.error('ID du concessionnaire non trouvé dans les paramètres de la route.');
    }
  }
}
