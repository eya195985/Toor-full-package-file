import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';
import { ClientService } from 'src/app/components/pages/tableau-de-bord/services/client.service'; // Importez ClientService
import { TokenService } from 'src/app/services/Token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from 'src/app/components/pages/tableau-de-bord/services/agence.service';
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent extends HotelHelperService implements OnInit {
  // Déclaration des propriétés pour les mots de passe
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Formulaire de mise à jour des informations personnelles
  updateForm = new FormGroup({
    nomComplet: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Formulaire de changement de mot de passe
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  successMessageform1: string | null = null;
  errorMessageform1: string | null = null;
  successMessageform2: string | null = null;
  errorMessageform2: string | null = null;

  constructor(
    private clientService: ClientService,
    private tokenService: TokenService,
    private agenceService: AgenceService,
    router: ActivatedRoute,
    route: Router
  ) {
    super(router, route);
  }

  ngOnInit(): void {
    this.loadClientDetails();
  }

  // Charger les détails du client pour initialiser le formulaire
  loadClientDetails(): void {
    const token = this.tokenService.getToken();
    if (token) {
      this.clientService.getClientDetails(token).subscribe(
        (response: any) => {

          this.updateForm.patchValue({
            nomComplet: response.nomComplet,
            telephone: response.telephone,
            adresse: response.adresse,
            email: response.email,
          });
        },
        (error: any) => {
          console.error('Erreur lors du chargement des détails du client :', error);
        }
      );
    }
  }

  // Soumission du formulaire de mise à jour des informations personnelles
onUpdate(): void {

  const token = this.tokenService.getToken();
  console.log('Token actuel:', token);

  if (!token) {
    // Si le token est vide ou nul,
    console.log('Le token est vide ou invalide.');
  }

  if (this.updateForm.valid) {
    if (token) {
      this.clientService.updateClientDetails(token, this.updateForm.value).subscribe(
        (response: HttpResponse<any>) => {
          // Récupérer le nouveau token depuis l'en-tête de la réponse
          const newToken = response.headers.get('Authorization');
            console.log('Token new new:', newToken);
          if (newToken) {
            // Supprimer le préfixe "Bearer " si présent
            const tokenValue = newToken.replace('Bearer ', '');
            // Stocker le nouveau token (par exemple, dans localStorage)
            localStorage.setItem('token', tokenValue);
            this.tokenService.setToken(tokenValue);

            // Afficher le nouveau token dans la console
            console.log('Nouveau token après l\'update :', tokenValue);
          }

          // Afficher un message de succès
          this.successMessageform1 = 'Informations mises à jour avec succès !';
          this.errorMessageform1 = null;
        },
        (error: any) => {
          // Gérer les erreurs
          this.errorMessageform1 = 'Erreur lors de la mise à jour des informations.';
          this.successMessageform1 = null;
        }
      );
    }
  } else {
    this.errorMessageform1 = 'Veuillez remplir tous les champs obligatoires.';
    this.successMessageform1 = null;
  }
}



  // Soumission du formulaire de changement de mot de passe
  onChangePassword(): void {
    if (this.changePasswordForm.valid) {
      const { oldPassword, newPassword, confirmPassword } = this.changePasswordForm.value;
      if (newPassword !== confirmPassword) {
        this.errorMessageform2 = 'Les mots de passe ne correspondent pas.';
        this.successMessageform2 = null;
        return;
      }

      // Créer le payload pour la mise à jour du mot de passe
      const payload = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };

      // Appeler le service pour changer le mot de passe
      this.agenceService.changePassword(payload).subscribe(
        (response: any) => {
          this.successMessageform2 = response.message || 'Mot de passe mis à jour avec succès.';
          this.errorMessageform2 = '';
          console.log('Réponse du backend :', response); // Afficher la réponse du backend
        },
        (error) => {
          this.errorMessageform2 = error.error.message || 'Une erreur est survenue lors du changement de mot de passe.';
          this.successMessageform2 = '';
          console.error('Erreur reçue du backend :', error); // Afficher l'erreur du backend
        }
      );
    }
  }
}
