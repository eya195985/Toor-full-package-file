import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/Token.service';


@Component({
  selector: 'app-tableau-de-bord-admin',
  templateUrl: './tableau-de-bord-admin.component.html',
  styleUrls: ['./tableau-de-bord-admin.component.css']
})
export class TableauDeBordAdminComponent {

 constructor(private router: Router , private tokenService: TokenService ) {}

   navigateTo(route: string) {
     this.router.navigate([route]);
   }
  isSidebarCollapsed = false;

    menuItems = [
      { route: "/dashboard", icon: "", label: "Dashboard" },
      { route: "/tableau-de-bord-admin/gestion-accees-concessionnaires", icon: "material-icons", label: " Partenaires En Attente" },
      { route: "/tableau-de-bord-admin/gestion-annonces-concessionnaires", icon: " ", label: "Annoces En Attente " },
      { route: "/tableau-de-bord-admin/concessionnaire-list", icon: "", label: "list concessionnaire" },
      { route: "/tableau-de-bord-admin/client-list", icon: "", label: "list client" }

    ];

    stats = [
      { title: "Today's Money", icon: "fas fa-dollar-sign", value: "$53,000", change: "+55%" },
      { title: "New Users", icon: "fas fa-user-plus", value: "2,300", change: "+3.5%" }
    ];

    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }

  logout(): void {
          this.tokenService.removeToken(); // Supprime le token
          this.router.navigate(['/']); // Redirige vers la page d'accueil
        }

 }
