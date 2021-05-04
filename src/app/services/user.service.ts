import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { StorageService } from "./storage.service";

@Injectable()
export class UserService {

    private readonly httpHeaders: HttpHeaders;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly storageService: StorageService,
    ) {
        this.httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Token': this.storageService.getCurrentSession()?.token,
        });
    }

    user(id: string): Observable<any> {
        return this.httpClient.get(`${environment.api}/user/${id}`, { headers: this.httpHeaders });
    }
}
