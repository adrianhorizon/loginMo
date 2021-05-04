import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class StorageService {

    private localStorageService;
    private currentSession = null

    constructor(private readonly router: Router) {
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
    }

    setCurrentSession(session: any): void {
        this.currentSession = session;
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
    }

    loadSessionData(): any {
        const load = this.localStorageService.getItem('currentUser');
        return (load) ? JSON.parse(load) : null;
    }

    getCurrentSession(): any {
        return this.currentSession;
    }

    removeCurrentSession(): void {
        this.localStorageService.removeItem('currentUser');
        this.currentSession = null;
    }

    isAuthenticated(): boolean {
        return (this.getCurrentToken() != null) ? true : false;
    };

    getCurrentToken(): string {
        const session = this.getCurrentSession();
        return session?.token || null;
    };

    logout(): void {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    }

}
