import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';


@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {
  verificationCode: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Récupérer l'email depuis les paramètres de l'URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  onSubmitVerificationCode() {
    const payload = {
      email: this.email,
      code: this.verificationCode,
    };

    this.authService.verifyCode(payload).subscribe(
      (response: any) => {
        console.log('Réponse du backend:', response);
        if (response.message === "Code de vérification valide") {
          this.successMessage = 'Merci de vérifier votre code, votre compte est prêt.';
          this.errorMessage = '';

          // Rediriger vers la page de connexion après 3 secondes
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000); // Délai de 3 secondes
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification du code', error);
        this.errorMessage = 'Erreur lors de la vérification du code. Veuillez réessayer.';
        this.successMessage = '';
      }
    );
  }
}
