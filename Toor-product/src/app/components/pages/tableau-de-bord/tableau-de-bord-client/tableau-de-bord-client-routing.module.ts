import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordClientComponent } from './tableau-de-bord-client.component';


const routes: Routes = [
  {
    path: '',
    component: TableauDeBordClientComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableauDeBordClientRoutingModule { }
