import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable()
export class AuthenticationService {

    constructor(private readonly httpClient: HttpClient) { }

    login(body: any): Observable<any> {
        return this.httpClient.post(`${environment.api}/login`, body);
    }

    register(body: any): Observable<any> {
        return this.httpClient.post(`${environment.api}/register`, body);
    }
}
