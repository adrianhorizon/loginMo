import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { StorageService } from "./storage.service";
import { map } from "rxjs/operators";

@Injectable()
export class LinksService {

    private readonly httpHeaders: HttpHeaders;

    constructor(private readonly httpClient: HttpClient,
        private readonly storageService: StorageService,
    ) {
        this.httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Token': this.storageService.getCurrentSession()?.token
        });
    }

    createLinks(body: any): Observable<any> {
        return this.httpClient.post(`${environment.api}/links`, body, { headers: this.httpHeaders });
    }

    getLinks(): Observable<any> {
        return this.httpClient.get(`${environment.api}/links`, { responseType: 'text' as 'json', headers: this.httpHeaders },)
            .pipe(map((result: any) => JSON.stringify(result)))
    }

    deleteLink(id: string): Observable<any> {
        return this.httpClient.delete(`${environment.api}/links/${id}`, { headers: this.httpHeaders });
    }
}
