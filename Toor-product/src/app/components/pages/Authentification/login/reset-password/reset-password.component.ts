import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  onSubmitResetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      this.successMessage = '';
      return;
    }

    const payload = {
      email: this.email,
      newPassword: this.newPassword,
    };

    this.authService.updatePassword(payload).subscribe(
      (response: any) => {
        console.log('Réponse du backend:', response);
        if (response.message) {
          this.successMessage = response.message;
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000); // Délai de 2 secondes
        } else if (response.error) {
          this.errorMessage = response.error;
          this.successMessage = '';
        }
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer.';
        this.successMessage = '';
      }
    );
  }
}
