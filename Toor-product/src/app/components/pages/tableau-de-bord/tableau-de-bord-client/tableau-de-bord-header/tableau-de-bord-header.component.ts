import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/components/helper/helper.service';
import { ClientService ,ClientResponse } from 'src/app/components/pages/tableau-de-bord/services/client.service'; // Importez ClientService
import { TokenService } from 'src/app/services/Token.service';

@Component({
  selector: 'app-tableau-de-bord-header',
  templateUrl: './tableau-de-bord-header.component.html',
  styleUrls: ['./tableau-de-bord-header.component.css']
})
export class TableauDeBordHeaderComponent extends HelperService implements OnInit {

  clientDetails: ClientResponse | null = null;

  constructor(private clientService: ClientService, private tokenService: TokenService , private router: Router) {
    super(); // Appel du constructeur de la classe parente
  }

  ngOnInit(): void {
    this.loadClientDetails();
  }

    logout(): void {
        this.tokenService.removeToken(); // Supprime le token
        this.router.navigate(['/']); // Redirige vers la page d'accueil
      }

  loadClientDetails(): void {
    const token = this.tokenService.getToken(); // Supposons que vous avez une méthode pour récupérer le token
    if (token) {
      this.clientService.getClientDetails(token).subscribe(
        (response: ClientResponse) => {
          this.clientDetails = response;
          if (this.clientDetails.logo) {
            this.clientDetails.logo = 'data:image/png;base64,' + this.clientDetails.logo; // Convertir le logo en base64
          }
        },
        (error: any) => {
          console.error('Erreur lors du chargement des détails du client :', error);
        }
      );
    }
  }

}
