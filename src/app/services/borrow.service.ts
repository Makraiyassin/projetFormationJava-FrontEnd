import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  token = "";

  constructor(private _http : HttpClient, private _session: SessionService) {
    this._session.token.subscribe(token => this.token = `Bearer ${token}`)
  }

  create(omnithequeId:number, productId : number){
    return(
      this._http.post<any>(
        `${environment.apiUrl}/borrow?omnithequeId=${omnithequeId}&productId=${productId}`,
        {},
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }
  return(borrowId : number){
    return(
      this._http.post<any>(
        `${environment.apiUrl}/borrow/return?borrowId=${borrowId}`,
        {},
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }
}
