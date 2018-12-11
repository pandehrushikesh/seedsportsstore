import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private datasource: RestDataSource
    ) {}

    authenticate(username: string, password: string): Observable<boolean> {
        // this.datasource.authenticate(username,password).subscribe(response => {alert(response)});
        return this.datasource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }

    clear() {
        this.datasource.auth_token = null;
    }
}
