import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  constructor(
  private _authService : AuthService
  ) { }

  email: any;
  requestSent : boolean = false
  errorMessage : any;

  ngOnInit(): void {
  }

  requestReset() {
    this._authService.requestResetPassword(this.email).subscribe(
      data=> this.requestSent = true,
      e => {
        console.log(e)
        this.errorMessage = e.error.message
      }
    );
  }
}
