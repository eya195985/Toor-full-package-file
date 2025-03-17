import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpClientComponent } from './sign-up-client.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

const routes: Routes = [
  {
    path: '', // La route vide (lorsque l'utilisateur va sur /sign-up-agence)
    component: SignUpClientComponent
  },
  {
      path: 'verify-code', // La route pour la page de vérification du code
      component: VerificationCodeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpClientRoutingModule { }
