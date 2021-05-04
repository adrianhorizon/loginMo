import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'app/services/authentication.service';
import { MaterialModule } from 'app/shared/angular-material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        AuthenticationService
    ],
})
export class AuthModule { }
