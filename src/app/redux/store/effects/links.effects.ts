import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    LinksActionType,
    GetLinksSuccess, GetLinksFailed,
    AddLinksSuccess, AddLinksFailed,
    DeleteLinksSuccess,
    DeleteLinksFailed
} from 'app/redux/store/actions/links.actions';
import { LinksService } from 'app/services/links.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LinksEffects {

    constructor(
        private actions$: Actions,
        private linksService: LinksService
    ) { }

    getTodos$ = createEffect(() => this.actions$.pipe(
        ofType(LinksActionType.GET_LINKS),
        switchMap(() =>
            this.linksService.getLinks().pipe(
                map((links: any) => new GetLinksSuccess(links)),
                catchError(error => of(new GetLinksFailed(error)))
            )
        )
    ));

    addTodo$ = createEffect(() => this.actions$.pipe(
        ofType(LinksActionType.ADD_LINKS),
        switchMap((action) =>
            this.linksService.createLinks(action['payload']).pipe(
                map((links: any) => new AddLinksSuccess(links)),
                catchError(error => of(new AddLinksFailed(error)))
            )
        )
    ));

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(LinksActionType.DELETE_LINKS),
        switchMap((action) =>
            this.linksService.deleteLink(action['payload']).pipe(
                map((linkId: number) => new DeleteLinksSuccess(linkId)),
                catchError(error => of(new DeleteLinksFailed(error)))
            )
        )
    ));

}
