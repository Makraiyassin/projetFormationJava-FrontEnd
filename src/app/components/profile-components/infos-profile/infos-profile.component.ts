import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-infos-profile',
  templateUrl: './infos-profile.component.html',
  styleUrls: ['./infos-profile.component.css']
})
export class InfosProfileComponent implements OnInit {


  constructor(private _userService : UserService) {
  }

  user !: IUser;
  editActive : boolean = false

  editForm = new FormGroup({
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        cp: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      }),
      email: new FormControl(),
      phone: new FormControl(),
    }
  )

  editPasswordActive : boolean = false

  editPasswordForm = new FormGroup({
      password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$")]),
      confirmPassword: new FormControl("", [Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$") ]),
    }
  )

  formValide : boolean = true;


  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data => {
        this.user = data;
        this.editForm.controls.email.patchValue(data.email);
        this.editForm.controls.phone.patchValue(data.phone);
        this.editForm.controls.address.controls.street.patchValue(data.address.street)
        this.editForm.controls.address.controls.number.patchValue(data.address.number)
        this.editForm.controls.address.controls.cp.patchValue(data.address.cp)
        this.editForm.controls.address.controls.city.patchValue(data.address.city)
        this.editForm.controls.address.controls.country.patchValue(data.address.country)
      }
    )

  }

  edit(){
    this.editActive = true
  }
  submitEdit(){
    this._userService.update(this.editForm.value).subscribe(
      data=>{
        this.user=data
      }
    //TODO:Si l'email est changer il faudrait se reconnecter avec le nouvel email sinon le token n'est plus valide
    )
    this.editActive = false
  }
  cancelEdit(){
    this.editActive = false
  }


  editPassword(){
    this.editPasswordActive = true
  }
  submitEditPassword(){
    if(this.editPasswordForm.value.password !== this.editPasswordForm.value.confirmPassword ){
      this.editPasswordForm.controls.password.setValue("");
      this.editPasswordForm.controls.confirmPassword.setValue("");
      this.editPasswordForm.controls.confirmPassword.setErrors({'noMatch': true});
      this.formValide = false;
    }
    else if(this.editPasswordForm.controls.confirmPassword.invalid || this.editPasswordForm.controls.password.invalid){
      this.editPasswordForm.controls.password.setValue("");
      this.editPasswordForm.controls.confirmPassword.setValue("");
      this.formValide = false;
    }
    else{
      this.formValide = true;
      this.editPasswordActive = false;
      this._userService.update(this.editPasswordForm.value).subscribe(data =>{console.log(data)});

    }
  }
  cancelEditPassword(){
    this.editPasswordActive = false
  }



}
