import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../models/IProduct";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "./session.service";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http : HttpClient, private _session: SessionService) {
    this._session.token.subscribe(token => this.token = `Bearer ${token}`)
  }

  token = "";

  getOne(id : number): Observable<IPost>{
    return(this._http.get<any>(`${environment.apiUrl}/post/${id}`))
  }

  getAll(): Observable<IPost[]>{
    return(this._http.get<any>(`${environment.apiUrl}/post`))
  }


}
