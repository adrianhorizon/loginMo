import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { StorageService } from 'app/services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public operation = 'login';
    public LOGIN = 'login';
    public SIGNUP = 'signup';
    public userForm: FormGroup;
    public hide = true;

    constructor(
        private readonly router: Router,
        private readonly formBuilder: FormBuilder,
        private readonly authenticationService: AuthenticationService,
        private readonly storageService: StorageService,
        private readonly _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.onForm();
    }

    get TextLogin(): string {
        return this.operation === this.LOGIN ? this.LOGIN : this.SIGNUP;
    }

    private onForm(): void {
        this.userForm = this.formBuilder.group({
            user: '',
            email: ['email@email.com', [Validators.required]],
            password: ['123213', [Validators.required]]
        });
    }

    formLogin(value: any, operation: any): void {
        if (operation === this.LOGIN) {
            this.submitLogin(value);
        } else {
            this.registerLogin(value);
        }
    }

    submitLogin(value: any): void {
        const body = {
            email: value.email,
            password: value.password
        }
        this.authenticationService.login(body)
            .pipe(
                map(data => {
                    this.storageService.setCurrentSession(data);
                    this.openSnackBar('Ingreso Correctamente', ':D');
                    this.router.navigate(['/dashboard']);
                }),
                catchError(() => {
                    return of({ error: true });
                })
            )
            .subscribe();
    }

    registerLogin(value: any): void {
        const body = {
            name: value.user,
            email: value.email,
            password: value.password
        }
        this.authenticationService.register(body)
            .pipe(
                map(() => {
                    this.operation = this.LOGIN;
                    this.openSnackBar('Usuario creado', ':D');
                }),
                catchError(() => {
                    return of({ error: true });
                })
            )
            .subscribe();
    }

    openSnackBar(message: string, action: string): void {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

}
