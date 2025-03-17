import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/components/pages/tableau-de-bord/services/client.service';
import { TokenService } from 'src/app/services/Token.service';

@Component({
  selector: 'app-edite-logo',
  templateUrl: './edite-logo.component.html',
  styleUrls: ['./edite-logo.component.css'],
})
export class EditeLogoComponent implements OnInit {
  contactForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  userId: string | undefined; // Ou `userId: string = '';` pour une chaîne vide par défaut
  successMessage: string | null = null;
  errorMessage: string | null = null;



  constructor(private clientService: ClientService, private tokenService: TokenService) {
    this.contactForm = new FormGroup({
      logo: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      logo: new FormControl(null, [Validators.required]),
    });

    // Récupérer l'ID de l'utilisateur
    const userIdFromService = this.tokenService.getUserId();
    if (userIdFromService !== null) {
      this.userId = userIdFromService.toString(); // Convertir en string si nécessaire
    }

    this.loadLogo();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid || !this.selectedFile || !this.userId) {
      this.errorMessage = 'Formulaire invalide, fichier manquant ou ID utilisateur manquant.';
      this.successMessage = null;
      console.error(this.errorMessage);
      return;
    }

    // Envoyer l'ID de l'utilisateur avec le fichier
    this.clientService.uploadLogo(this.selectedFile, this.userId).subscribe(
      (response) => {
        this.successMessage = 'Logo mis à jour avec succès !';
        this.errorMessage = null;
        console.log('Logo enregistré avec succès :', response);
        this.loadLogo();
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la mise à jour du logo : ' + error.message;
        this.successMessage = null;
        console.error('Erreur lors de l\'enregistrement du logo :', error);
      }
    );
  }

  loadLogo(): void {
    if (!this.userId) {
      this.errorMessage = 'ID utilisateur manquant.';
      this.successMessage = null;
      console.error(this.errorMessage);
      return;
    }

    this.clientService.getLogo(this.userId).subscribe(
      (logoBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(logoBlob);
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement du logo : ' + error.message;
        this.successMessage = null;
        console.error(this.errorMessage);
        this.imagePreview = 'assets/images/avatar.png'; // Image par défaut
      }
    );
  }
}
