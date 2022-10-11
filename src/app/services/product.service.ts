import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http : HttpClient, private _session: SessionService) {
    this._session.token.subscribe(token => this.token = `Bearer ${token}`)
  }

  token = "";

  getOne(id : number): Observable<IProduct>{
    return(this._http.get<any>(`${environment.apiUrl}/product/${id}`))
  }

  getAll(): Observable<IProduct[]>{
    return(this._http.get<any>(`${environment.apiUrl}/product`))
  }

  search(name : string): Observable<IProduct[]>{
    return(this._http.get<any>(`${environment.apiUrl}/product/search?name=${name}`))
  }

  create(product: any): Observable<IProduct>{
    return(
      this._http.post<any>(
        `${environment.apiUrl}/product/create`,
        product,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }

  delete(id : number): Observable<IProduct>{
    return(
      this._http.delete<any>(
        `${environment.apiUrl}/product/delete?id=${id}`,
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
        `${environment.apiUrl}/product/update`,
        form,
        {
          headers: new HttpHeaders()
            .append("Authorization", this.token)
        }
      )
    )
  }
}
