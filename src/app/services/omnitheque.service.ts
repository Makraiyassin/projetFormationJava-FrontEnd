import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IOmnitheque} from "../models/IOmnitheque";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class OmnithequeService {
  token = "";

  constructor(private _http : HttpClient, private _session: SessionService) {
    this._session.token.subscribe(token => this.token = `Bearer ${token}`)
  }

  getOne(id : number): Observable<IOmnitheque>{
    return(this._http.get<any>(`${environment.apiUrl}/omnitheque/${id}`))
  }

  getAll(): Observable<IOmnitheque[]>{
    return(this._http.get<any>(`${environment.apiUrl}/omnitheque`))
  }

  create(omnitheque: any): Observable<IOmnitheque>{
    return(
      this._http.post<any>(
        `${environment.apiUrl}/omnitheque/create`,
        omnitheque,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }


  update(form: any): Observable<IOmnitheque>{
    return(
      this._http.patch<any>(
        `${environment.apiUrl}/omnitheque/update`,
        form,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }

}
