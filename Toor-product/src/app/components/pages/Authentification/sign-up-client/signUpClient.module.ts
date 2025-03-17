import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { SignUpClientComponent } from './sign-up-client.component';
import { SignUpClientRoutingModule } from './signUpClient-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ContentComponent } from './content/content.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';





@NgModule({
  declarations: [
    SignUpClientComponent,
    SignUpFormComponent,
    ContentComponent,
    VerificationCodeComponent

  ],
  imports: [
    CommonModule,
    SignUpClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule,
    NiceSelectModule
  ]
})
export class SignUpClientModule { }
