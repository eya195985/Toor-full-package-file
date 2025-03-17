import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Importez SafeUrl ici
import { AdminService, ConcessionnaireResponse } from 'src/app/components/pages/tableau-de-bord/services/Admin.service';


@Component({
  selector: 'app-gestion-accees-concessionnaires',
  templateUrl: './gestion-accees-concessionnaires.component.html',
  styleUrls: ['./gestion-accees-concessionnaires.component.css']
})
export class GestionAcceesConcessionnairesComponent implements OnInit {
  concessionnaires: ConcessionnaireResponse[] = []; // Utilisez ConcessionnaireResponse
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  pages: number[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private adminService: AdminService, // Injection du service
    private sanitizer: DomSanitizer // Injectez DomSanitizer ici
  ) {}

  ngOnInit(): void {
    this.loadConcessionnaires();
  }

 loadConcessionnaires(): void {
   this.isLoading = true;
   this.adminService.getConcessionnairesEnAttente().subscribe(
     (data: ConcessionnaireResponse[]) => {
       this.concessionnaires = data.map(concessionnaire => ({
         ...concessionnaire,
         logoUrl: concessionnaire.logo ? `data:image/png;base64,${concessionnaire.logo}` : 'assets/default-logo.png'
       }));
       this.totalPages = Math.ceil(this.concessionnaires.length / this.pageSize);
       this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
       this.isLoading = false;
     },
     (error) => {
       console.error('Erreur lors du chargement des concessionnaires', error);
       this.isLoading = false;
     }
   );
 }



  changeStatus(idConcessionnaire: number, status: string): void {
    // Implémentez cette méthode si nécessaire
  }

  consulterDetails(idConcessionnaire: number): void {
    this.router.navigate(['/tableau-de-bord-admin/concessionnaire-details', idConcessionnaire]);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  updateStatut(concessionnaire: ConcessionnaireResponse, nouveauStatut: string): void {
    this.adminService.updateStatut(concessionnaire.email, nouveauStatut).subscribe(
      (response) => {
        console.log('Statut mis à jour avec succès', response);
        alert('Statut mis à jour avec succès');
        this.loadConcessionnaires(); // Recharger la liste après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du statut', error);
        alert('Erreur lors de la mise à jour du statut');
      }
    );
  }






}
