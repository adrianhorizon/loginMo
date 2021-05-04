import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { StorageService } from 'app/services/storage.service';
import { UserService } from 'app/services/user.service';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as Links from 'app/redux/store/actions/links.actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public user: any;
    public links: any;
    public delete = [
        {
            "id": "1",
            "createdAt": "2021-03-18T15:11:43.458Z",
            "url": "https://daphne.com",
            "name": "rodger.name"
        },
        {
            "id": "2",
            "createdAt": "2021-03-18T18:01:24.837Z",
            "url": "http://ferne.biz",
            "name": "german.name"
        },
    ];

    constructor(
        private readonly store: Store<any>,
        private readonly storageService: StorageService,
        private readonly userService: UserService,
        private readonly _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.userById(this.storageService.getCurrentSession());
        this.allLink()
    }

    userById({ token }: any): void {
        this.userService.user(token)
            .pipe(
                map(data => this.user = data),
                catchError(() => {
                    return of({ error: true });
                })
            ).subscribe();
    }

    private allLink(): void {
        this.store.dispatch(new Links.GetLinks());
        this.store.select('links').subscribe(({ todoList }) => {
            this.links = todoList;
        }, error => {
            this.openSnackBar('error', error);
        });
    }

    deleteTodo(linkId: number): void {
        this.store.dispatch(new Links.DeleteLinks(linkId));
        this.openSnackBar('Eliminado', 'Exitoso');
    }

    public logout(): void {
        this.storageService.logout();
        this.openSnackBar('Adios', 'Exitos');
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

}
