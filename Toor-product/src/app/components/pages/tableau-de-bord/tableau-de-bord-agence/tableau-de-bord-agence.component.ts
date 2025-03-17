import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AgenceService, ConcessionnaireResponse } from 'src/app/components/pages/tableau-de-bord/services/agence.service';
import { TokenService } from 'src/app/services/Token.service';

@Component({
  selector: 'app-tableau-de-bord-agence',
  templateUrl: './tableau-de-bord-agence.component.html',
  styleUrls: ['./tableau-de-bord-agence.component.css']
})
export class TableauDeBordAgenceComponent implements OnInit {
  concessionnaire: ConcessionnaireResponse | null = null;
  logoUrl: SafeUrl | null = null; // Utilisez SafeUrl pour stocker l'URL sécurisée
  defaultLogoUrl = 'assets/images/eya.jpg'; // Image par défaut

  isSidebarCollapsed = false;
 isDropdownOpen = false; // Variable pour gérer l'état du menu déroulant

   // Méthode pour basculer l'état du menu déroulant
   toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
   }

   // Méthode pour fermer le menu déroulant
   closeDropdown() {
     this.isDropdownOpen = false;
   }


  menuItems = [
    { route: "/tableau-de-bord-agence", icon: "", label: "Dashboard" },
    { route: "/tableau-de-bord-agence/EditProfil", icon: "", label: "Profile" },
    { route: "/tableau-de-bord-agence/etape1-publier-voyage", icon: "material-icons", label: "Publier votre voyage" },
    { route: "/tableau-de-bord-agence/panier", icon: " ", label: "Consulter votre panier" },
    { route: "/tableau-de-bord-agence/ChangePassword", icon: "", label: "ChangePassword" }
  ];

  stats = [
    { title: "Today's Money", icon: "fas fa-dollar-sign", value: "$53,000", change: "+55%" },
    { title: "New Users", icon: "fas fa-user-plus", value: "2,300", change: "+3.5%" }
  ];

  constructor(
    private router: Router,
    private agenceService: AgenceService,
    private tokenService: TokenService,
    private sanitizer: DomSanitizer
  ) {}

 ngOnInit(): void {
   console.log('Initialisation du composant TableauDeBordAgenceComponent');

   // Récupérer l'ID de l'utilisateur connecté
   const userId = this.tokenService.getUserId();

   if (userId) {
     this.loadConcessionnaire(userId); // Passer l'ID de l'utilisateur à loadConcessionnaire
   } else {
     console.error('ID utilisateur non trouvé. Impossible de charger les détails du concessionnaire.');
   }
 }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  loadConcessionnaire(userId: number): void {
    console.log('Chargement des informations du concessionnaire pour l\'utilisateur ID :', userId);
    this.agenceService.getConcessionnaireByUserId(userId).subscribe(
      (data) => {
        console.log('Données du concessionnaire reçues :', data);
        this.concessionnaire = data;

        // Utiliser directement la chaîne base64 du logo si elle est disponible
        if (data.logo) {
          const objectUrl = `data:image/png;base64,${data.logo}`; // Créer une URL de données
          this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl); // Sécurisez l'URL
        } else {
          console.warn('Aucun logo trouvé dans les données du concessionnaire.');
          this.logoUrl = this.sanitizer.bypassSecurityTrustUrl(this.defaultLogoUrl); // Utiliser l'image par défaut
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du concessionnaire :', error);
      }
    );
  }

  logout(): void {
    this.tokenService.removeToken(); // Supprime le token
    this.router.navigate(['/']); // Redirige vers la page d'accueil
  }
}
