import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private _authService : AuthService,
    private _route: ActivatedRoute
  ) { }

  password: String = "";
  confirmPassword: String = "";
  resetOk : boolean = false
  errorMessage : any;

  ngOnInit(): void {
  }

  reset() {
    if(this.validatePassword() ){
      this._authService.resetPassword(
        this._route.snapshot.params["token"],
        {password:this.password}
      ).subscribe(
        data=> this.resetOk = true,
        e => {
          console.log(e)
          this.errorMessage = e.error.message
        }
      );
    }
  }

  validatePassword():boolean{
    if(this.password === this.confirmPassword) return true
    else {
      alert("les deux mot de passe doivent être identique");
      this.confirmPassword = "";
      this.password = "";
      return  false
    }
  }

}
