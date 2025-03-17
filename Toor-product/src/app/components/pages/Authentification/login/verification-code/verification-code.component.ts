import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';


@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css'],
})
export class VerificationCodeComponent {
  verificationCode: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }



  // Vérification du code
  onSubmitVerificationCode() {
      const payload = {
          email: this.email,
          code: this.verificationCode,
      };

      this.authService.verifyCodePassword(payload).subscribe(
          (response: any) => {
              console.log('Réponse du backend:', response);
              if (response.message === "Code de vérification valide.") {
                  // Rediriger vers la page de réinitialisation du mot de passe
                  this.router.navigate(['/login/reset-password'], { queryParams: { email: this.email } });
              } else {
                  this.errorMessage = response.message;
              }
          },
          (error) => {
              console.error('Erreur lors de la vérification du code', error);
              this.errorMessage = 'Erreur lors de la vérification du code. Veuillez réessayer.';
          }
      );
  }
}
