import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from "../../services/storage.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate {

    constructor(
        private readonly router: Router,
        private readonly storageService: StorageService,
    ) { }

    canActivate(): boolean {
        if (this.storageService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
