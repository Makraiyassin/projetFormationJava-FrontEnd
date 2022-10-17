import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  login(loginForm : any) : Observable<any>{
    return this._http.post(`${environment.apiUrl}/user/login`, loginForm)
  }
  register(registerForm : any) : Observable<any>{
    return this._http.post(`${environment.apiUrl}/user/register`, registerForm);
  }

  requestResetPassword(email: String){
    return this._http.get(
      `${environment.apiUrl}/user/requestResetPassword?urlResetPassword=${environment.frontUrl}/resetPassword/&email=${email}`
    )
  }

  resetPassword(token : string, form:any){
    return this._http.post(
      `${environment.apiUrl}/user/resetPassword?token=${token}`,
      form
    )
  }

}
