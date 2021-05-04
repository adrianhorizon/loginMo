import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [AuthorizatedGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: (): Promise<any> => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
        ],
    },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
