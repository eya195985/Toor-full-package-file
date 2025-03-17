import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/pages/Authentification/services/auth.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  // Champs de l'utilisateur
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  nomComplet: string = '';
  telephone: string = '';
  adresse: string = '';

  // Champs du concessionnaire
  siteWeb: string = '';
  numeroTax: string = '';
  licenceCommerciale: string = '';
  description: string = '';
  nomGerant: string = '';
  emailGerant: string = '';
  telephoneGerant: string = '';
  paye: string = '';
  logo: File | null = null;

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.logo = event.target.files[0];
    }
  }

  onSignup(): void {
    // Vérifier que les mots de passe correspondent
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      this.successMessage = '';
      return;
    }

    // Préparer les données du concessionnaire sous forme d'objet JSON
    const concessionnaireData = {
      email: this.email,
      nomComplet: this.nomComplet,
      telephone: this.telephone,
      adresse: this.adresse,
      siteWeb: this.siteWeb,
      numeroTax: this.numeroTax,
      licenceCommerciale: this.licenceCommerciale,
      description: this.description,
      nomGerant: this.nomGerant,
      emailGerant: this.emailGerant,
      telephoneGerant: this.telephoneGerant,
      paye: this.paye
    };

    // Créer un objet FormData
    const formData = new FormData();

    // Ajouter l'objet concessionnaire sérialisé en JSON
    formData.append('concessionnaire', new Blob([JSON.stringify(concessionnaireData)], {
      type: 'application/json'
    }));

    // Ajouter le fichier logo
    if (this.logo) {
      formData.append('logo', this.logo);
    }

    // Afficher les données dans la console pour vérification
    console.log('Données du formulaire envoyées :');
    console.log('Concessionnaire:', concessionnaireData);
    if (this.logo) {
      console.log('Logo:', this.logo.name);
    }

    // Appeler le service d'inscription
    this.authService.signupConcessionnaire(formData).subscribe({
      next: (response) => {
        this.successMessage = 'Votre compte a été créé. En attente de confirmation par l\'administrateur.';
        this.errorMessage = '';

        // Délai de 3 secondes avant la redirection
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000); // 3000 millisecondes = 3 secondes
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Erreur lors de l\'inscription';
        this.successMessage = '';
      },
    });
}}
