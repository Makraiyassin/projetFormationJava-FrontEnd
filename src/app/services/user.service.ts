import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token = "";

  constructor(private _http : HttpClient,private _session: SessionService) {
    this._session.token.subscribe(token => this.token = `Bearer ${token}`)
  }

  getUser(): Observable<IUser> {
    return this._http.get<IUser>(
      `${environment.apiUrl}/user/profil`,
      {
        headers: new HttpHeaders()
          .append("Authorization", this.token)
      }
    )
  }
  update(form: any): Observable<IUser> {
    return this._http.patch<IUser>(
      `${environment.apiUrl}/user/update`,
      form,
      {
        headers: new HttpHeaders()
          .append("Authorization", this.token)
      }
    )
  }

  getInfos(id : number){
    return this._http.get<IUser>(
      `${environment.apiUrl}/user/infos?id=${id}`,
      {
        headers: new HttpHeaders()
          .append("Authorization", this.token)
      }
    )
  }
}
