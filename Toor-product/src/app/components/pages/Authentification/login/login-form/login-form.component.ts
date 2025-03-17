import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Importez HttpErrorResponse

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    console.log('Tentative de connexion avec email:', this.email);
    console.log('Mot de passe envoyé:', this.password);

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Réponse de l\'API:', response);

        if (!response.token) {
          console.error('Aucun token reçu dans la réponse de l\'API');
          this.errorMessage = 'Erreur lors de la connexion : aucun token reçu';
          return;
        }

        localStorage.setItem('token', response.token);
        console.log('Token stocké dans le localStorage:', response.token);

        const storedToken = localStorage.getItem('token');
        if (storedToken !== response.token) {
          console.error('Erreur lors du stockage du token dans le localStorage');
          this.errorMessage = 'Erreur lors de la connexion : problème de stockage du token';
          return;
        }

        const role = response.role;
        console.log('Rôle récupéré:', role);

        if (role === 'client') {
          console.log('Redirection vers l\'espace client');
          this.router.navigate(['/tableau-de-bord-client']);
        } else if (role === 'concessionaire') {
          console.log('Redirection vers l\'espace agence');
          this.router.navigate(['/tableau-de-bord-agence']);
        } else if (role === 'admin') {
          console.log('Redirection vers l\'espace admin');
          this.router.navigate(['/tableau-de-bord-admin']);
        } else {
          console.error('Rôle non reconnu:', role);
          this.errorMessage = 'Rôle non reconnu';
        }
      },
      (error) => {
        console.error('Erreur de connexion :', error);

        // Afficher le message d'erreur du backend
        if (error && error.message) {
          this.errorMessage = error.message; // Utiliser le message d'erreur du backend
        } else {
          this.errorMessage = 'Une erreur inconnue est survenue'; // Message par défaut
        }
      }
    );
  }
  // Demande de code de vérification pour la réinitialisation du mot de passe
    onForgotPassword(event: Event): void {
      event.preventDefault();

      this.authService.requestVerificationCode(this.email).subscribe(
        (response) => {
          this.router.navigate(['/login/verify-code'], { queryParams: { email: this.email } });
        },
        (error) => {
          // Extraire le message d'erreur du backend
          const backendErrorMessage = error.error?.error || 'Erreur lors de la demande de code de vérification.';
          this.errorMessage = backendErrorMessage; // Afficher le message d'erreur
        }
      );
    }
}
