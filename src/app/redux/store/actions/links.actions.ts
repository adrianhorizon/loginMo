import { Action } from '@ngrx/store';

export enum LinksActionType {
    GET_LINKS = 'GET_LINKS',
    GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS',
    GET_LINKS_FAILED = 'GET_LINKS_FAILED',
    ADD_LINKS = 'ADD_LINKS',
    ADD_LINKS_SUCCESS = 'ADD_LINKS_SUCCESS',
    ADD_LINKS_FAILED = 'ADD_LINKS_FAILED',
    DELETE_LINKS = 'DELETE_LINKS',
    DELETE_LINKS_SUCCESS = 'DELETE_LINKS_SUCCESS',
    DELETE_LINKS_FAILED = 'DELETE_LINKS_FAILED'
}

export class GetLinks implements Action {
    readonly type = LinksActionType.GET_LINKS;
}

export class GetLinksSuccess implements Action {
    readonly type = LinksActionType.GET_LINKS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetLinksFailed implements Action {
    readonly type = LinksActionType.GET_LINKS_FAILED;
    constructor(public payload: string) { }
}

export class AddLinks implements Action {
    readonly type = LinksActionType.ADD_LINKS;
    constructor(public payload: any) { }
}

export class AddLinksSuccess implements Action {
    readonly type = LinksActionType.ADD_LINKS_SUCCESS;
    constructor(public payload: any) { }
}

export class AddLinksFailed implements Action {
    readonly type = LinksActionType.ADD_LINKS_FAILED;
    constructor(public payload: string) { }
}

export class DeleteLinks implements Action {
    readonly type = LinksActionType.DELETE_LINKS;
    constructor(public payload: number) { }
}

export class DeleteLinksSuccess implements Action {
    readonly type = LinksActionType.DELETE_LINKS_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteLinksFailed implements Action {
    readonly type = LinksActionType.DELETE_LINKS_FAILED;
    constructor(public payload: string) { }
}

export type LinksActions = GetLinks |
    GetLinksSuccess |
    GetLinksFailed |
    AddLinks |
    AddLinksSuccess |
    AddLinksFailed |
    DeleteLinks |
    DeleteLinksSuccess |
    DeleteLinksFailed;
