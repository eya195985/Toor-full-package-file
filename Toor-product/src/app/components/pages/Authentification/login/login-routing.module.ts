import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // ✅ Ajout de la route Login
  {
          path: 'verify-code', // La route pour la page de vérification du code
          component: VerificationCodeComponent
    },
  {
            path: 'reset-password', // La route pour la page de vérification du code
            component: ResetPasswordComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }






