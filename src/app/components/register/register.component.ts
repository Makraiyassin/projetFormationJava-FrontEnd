import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      birthdate: new FormControl("", [Validators.required]),
      address: new FormGroup({
        street: new FormControl("", [Validators.required]),
        number: new FormControl("", [Validators.required]),
        cp: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        country: new FormControl("", [Validators.required]),
      }),
      phone: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    }
  )

  formValide : boolean = true;

  constructor(
    private auth : AuthService,
    private session : SessionService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    if(this.registerFormValidation()){
      this.auth.register(this.registerForm.value).subscribe(data => {
        this.auth.login(this.registerForm.value).subscribe(data => {
          this.session.login(data.token)
          this.router.navigate(["/"]);
        })
      })
    }
  }

  passwordvalidation(): boolean {
    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.registerForm.controls.password.setValue("")
      this.registerForm.controls.confirmPassword.setValue("")
      this.registerForm.controls['confirmPassword'].setErrors({'noMatch': true})
      return false
    }else{
      return true
    }
  }
  registerFormValidation(): boolean{
    if(
      this.passwordvalidation() &&
      this.registerForm.controls.email.valid &&
      this.registerForm.controls.phone.valid &&
      this.registerForm.controls.birthdate.valid &&
      this.registerForm.controls.firstName.valid &&
      this.registerForm.controls.lastName.valid &&
      this.registerForm.controls.address.controls.street.valid &&
      this.registerForm.controls.address.controls.number.valid &&
      this.registerForm.controls.address.controls.cp.valid &&
      this.registerForm.controls.address.controls.city.valid
    ){
      return true;
    }else{
      this.formValide=false;
      return false;
    }
  }
}
