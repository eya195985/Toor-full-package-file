import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyageDetailsComponent } from './voyage-details.component'; // Chemin corrigé

const routes: Routes = [{ path: '', component: VoyageDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageDetailsRoutingModule { }
