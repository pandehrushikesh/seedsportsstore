import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = '3500';

@Injectable()
export class RestDataSource {
    baseURL: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL + 'products');
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseURL + 'orders', order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseURL + 'login', {username: user, password: pass})
        .pipe(map(responce => {
            this.auth_token = responce.success ? responce.token : null;
            return responce.success;
        }));
    }
}
