import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  SignUpForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.SignUpForm = this.fb.group({
      nom_complet: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Méthode onSubmit() appelée');


    if (this.SignUpForm.invalid) {
      console.log('Formulaire invalide');
      console.log('Erreurs de validation :', this.SignUpForm.errors);
      return;
    }

    // Vérifier que les mots de passe correspondent
    if (this.SignUpForm.value.mot_de_passe !== this.SignUpForm.value.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      console.log('Les mots de passe ne correspondent pas'); // Debug
      console.log('Mot de passe saisi :', this.SignUpForm.value.mot_de_passe);
      console.log('Confirmation du mot de passe :', this.SignUpForm.value.confirmPassword);
      return;
    }

    // Mapper les valeurs du formulaire vers userData
    const userData = {
      nomComplet: this.SignUpForm.value.nom_complet,
      email: this.SignUpForm.value.email,
      motDePasse: this.SignUpForm.value.mot_de_passe,
      telephone: this.SignUpForm.value.telephone,
      adresse: this.SignUpForm.value.adresse
    };

    console.log('Données à envoyer :', userData);

    // Appeler signupClient avec userData
    this.authService.signupClient(userData).subscribe(
      (response: any) => {
        console.log('Inscription réussie', response);
        this.successMessage = 'Inscription réussie ! Un code de vérification a été envoyé à votre email.';
        this.errorMessage = '';

        // Afficher les données envoyées dans la console
        console.log('Données envoyées avec succès :', userData);

        // Rediriger vers la page de vérification du code avec l'email en paramètre
        this.router.navigate(['/sign-up-client/verify-code'], { queryParams: { email: userData.email } });
      },
      (error: any) => {
        console.error('Échec de l\'inscription', error);
        this.errorMessage = error.error.message || 'Erreur lors de l\'inscription';
        this.successMessage = '';

        // Afficher l'erreur dans la console
        console.error('Erreur lors de l\'envoi des données :', error);
      }
    );
  }
}
