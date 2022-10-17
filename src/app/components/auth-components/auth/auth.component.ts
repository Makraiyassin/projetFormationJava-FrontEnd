import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../services/session.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  token : any;

  constructor(
    private auth : AuthService,
    private session : SessionService,
  ) { }

  ngOnInit(): void {
    this.session.token.subscribe(token => this.token = token);
  }
  login() {
    this.auth.login(this.loginForm.value).subscribe(data => {
      this.session.login(data.token);
    })
  }
  logout() {
    this.session.logout();
  }

}
