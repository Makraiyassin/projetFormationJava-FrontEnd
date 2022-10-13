import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";
import {IPost} from "../models/IPost";
import {IProduct} from "../models/IProduct";

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


  create(post : any): Observable<IPost>{
    return(
      this._http.post<any>(
        `${environment.apiUrl}/post/create`,
        post,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }

  delete(id : number): Observable<IPost>{
    return(
      this._http.delete<any>(
        `${environment.apiUrl}/post/delete?id=${id}`,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }

  update(form: any): Observable<IProduct>{
    return(
      this._http.patch<any>(
        `${environment.apiUrl}/post/update`,
        form,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }

}
