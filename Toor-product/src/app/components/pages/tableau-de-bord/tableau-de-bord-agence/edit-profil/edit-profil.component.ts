import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { AgenceService } from 'src/app/components/pages/tableau-de-bord/services/agence.service';
import { TokenService } from 'src/app/services/Token.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
  updateForm = new FormGroup({
    nomComplet: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pays: new FormControl('', [Validators.required]),
    siteWeb: new FormControl('', [Validators.required]),
    numeroTax: new FormControl('', [Validators.required]),
    licenceCommerciale: new FormControl('', [Validators.required]),
    nomGerant: new FormControl('', [Validators.required]),
    emailGerant: new FormControl('', [Validators.required, Validators.email]),
    telephoneGerant: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    logo: new FormControl(''), // Ajoutez un contrôle pour le logo
  });

  // Add the changePasswordForm
    changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

  logoUrl: SafeUrl | null = null;
  defaultLogoUrl = 'assets/images/eya.png';

    successMessageform1: string | null = null;
    errorMessageform1: string | null = null;
    successMessageform2: string | null = null;
    errorMessageform2: string | null = null;

  constructor(
    private agenceService: AgenceService,
    private tokenService: TokenService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadAgencyDetails();
  }

  // Dans le composant Angular
 loadAgencyDetails(): void {
   const userId = this.tokenService.getUserId();

   if (userId) {
     console.log('Chargement des informations du concessionnaire pour l\'utilisateur ID :', userId);
     this.agenceService.getConcessionnaireByUserId(userId).subscribe(
       (response: any) => {
         console.log('Données du concessionnaire reçues :', response);
         this.updateForm.patchValue({
           nomComplet: response.nomComplet,
           telephone: response.telephone,
           adresse: response.adresse,
           email: response.email,
           pays: response.pays,
           siteWeb: response.siteWeb,
           numeroTax: response.numeroTax,
           licenceCommerciale: response.licenceCommerciale,
           nomGerant: response.nomGerant,
           emailGerant: response.emailGerant,
           telephoneGerant: response.telephoneGerant,
           description: response.description,
         });

         // Afficher le logo si disponible
         if (response.logo) {
           const objectUrl = `data:image/png;base64,${response.logo}`;
           this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
           console.log("Logo chargé avec succès.");
         } else {
           this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(this.defaultLogoUrl);
           console.log("Aucun logo trouvé. Utilisation du logo par défaut.");
         }
       },
       (error: any) => {
         console.error('Erreur lors du chargement des détails de l\'agence :', error);
       }
     );
   } else {
     console.error('ID utilisateur non trouvé. Impossible de charger les détails du concessionnaire.');
   }
 }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.updateForm.patchValue({ logo: base64String.split(',')[1] }); // Enregistrez le logo en base64
        this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(base64String); // Affichez le nouveau logo
      };
      reader.readAsDataURL(file);
    }
  }

  onUpdate(): void {
    const token = this.tokenService.getToken();
    if (this.updateForm.valid && token) {
      this.agenceService.updateAgencyDetails(token, this.updateForm.value).subscribe(
        (response: HttpResponse<any>) => {
          const newToken = response.headers.get('Authorization');
          if (newToken) {
            const tokenValue = newToken.replace('Bearer ', '');
            localStorage.setItem('token', tokenValue);
            this.tokenService.setToken(tokenValue);
          }
          this.successMessageform1 = 'Informations mises à jour avec succès !';
          this.errorMessageform1 = null;
        },
        (error: any) => {
          this.errorMessageform1 = 'Erreur lors de la mise à jour des informations.';
          this.successMessageform1 = null;
        }
      );
    } else {
      this.errorMessageform1 = 'Veuillez remplir tous les champs obligatoires.';
      this.successMessageform1 = null;
    }
  }
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
