import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as Links from 'app/redux/store/actions/links.actions';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
    public addLinkForm: FormGroup;

    constructor(
        private readonly store: Store<any>,
        private readonly _snackBar: MatSnackBar,
        private readonly formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.onForm();
    }

    private onForm(): void {
        this.addLinkForm = this.formBuilder.group({
            url: ['', [Validators.required]],
            name: ['', [Validators.required]]
        });
    }

    addTodo(linkForm: any): void {
        this.store.dispatch(new Links.AddLinks(linkForm.value));
        this.addLinkForm.reset();
        this.openSnackBar('Creado', 'Exitoso');
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

}
