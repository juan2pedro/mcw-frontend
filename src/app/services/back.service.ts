import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../models/user.model';
import { WalletData } from '../models/wallet.model';
import { CryptoData } from '../models/crypto.model';
@Injectable({
    providedIn: 'root'
})
export class BackService {
    private apiURL = 'http://localhost:5000/api';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiURL + '/user');
    }

    getID(user_name: string): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiURL + '/user?user_name=' + user_name);
    }
    getWallets(): Observable<WalletData[]> {
        const lista = this.http.get<WalletData[]>(this.apiURL + '/wallet/all');
        return lista
    }
    getCrypto(): Observable<CryptoData[]> {
        return this.http.get<CryptoData[]>(this.apiURL + '/house');
    }

}