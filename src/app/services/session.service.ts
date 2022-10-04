import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _token : BehaviorSubject<any|null> = new BehaviorSubject(null);

  get token(): Observable<any | null> { return this._token.asObservable(); }

  constructor() {

    const localToken = localStorage.getItem("token");

    if (localToken) {
      this._token.next(JSON.parse(localToken));
    }

  }

  login(token: String) {
    this._token.next(token);
    localStorage.setItem("token", JSON.stringify(token));
  }
  logout() {
    this._token.next(null);
    localStorage.removeItem("token");
  }

}
