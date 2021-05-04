import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserService } from 'app/services/user.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { LinksService } from 'app/services/links.service';
import { LinksComponent } from './links/links.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/shared/angular-material/material.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ],
    declarations: [DashboardComponent, LinksComponent],
    providers: [
        UserService,
        AuthenticationService,
        LinksService,
    ]
})
export class DashboardModule { }
