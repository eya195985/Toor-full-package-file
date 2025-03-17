import { Component, OnInit } from '@angular/core';
import { AgenceService } from 'src/app/components/pages/tableau-de-bord/services/agence.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private agenceService: AgenceService) {}

  ngOnInit(): void {}

  onChangePassword() {
    // Vérifier que les nouveaux mots de passe correspondent
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les nouveaux mots de passe ne correspondent pas.';
      return;
    }

    // Données à envoyer au backend
    const payload = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
    };

    // Afficher les données envoyées au backend
    console.log('Données envoyées au backend :', payload);

   // Appeler le service pour changer le mot de passe
   this.agenceService.changePassword(payload).subscribe(
     (response: any) => {
       this.successMessage = response.message || 'Mot de passe mis à jour avec succès.';
       this.errorMessage = '';
       console.log('Réponse du backend :', response); // Afficher la réponse du backend
     },
     (error) => {
       this.errorMessage = error.error.message || 'Une erreur est survenue lors du changement de mot de passe.';
       this.successMessage = '';
       console.error('Erreur reçue du backend :', error); // Afficher l'erreur du backend
     }
   );
}
}
