import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserData } from "../models/user.model";

@Injectable({
    providedIn:"root"
})

export class LoginService{
    private loginUrl:string = "http://localhost:5000/api/user/login"
    constructor(private http:HttpClient){}

    getUserbyEmailAndPassword(email : string, password : string) : Observable<UserData>{
        const body = {
            email : email,
            password : password
        }
      
        return this.http.post<UserData>(this.loginUrl, body);
    }

    
}