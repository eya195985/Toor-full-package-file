import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { SignUpAgenceComponent } from './sign-up-agence.component';
import { SignUpAgenceRoutingModule } from './signUpAgence-routing.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { VerificationCodeComponent } from './verification-code/verification-code.component';



@NgModule({
  declarations: [
    SignUpAgenceComponent,
    SignUpFormComponent,
    ContentComponent,
    VerificationCodeComponent

  ],
  imports: [
    CommonModule,
    SignUpAgenceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule,
    NiceSelectModule
  ]
})
export class SignUpAgenceModule { }
