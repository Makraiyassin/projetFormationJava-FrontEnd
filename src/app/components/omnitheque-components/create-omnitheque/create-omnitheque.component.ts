import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {OmnithequeService} from "../../../services/omnitheque.service";

@Component({
  selector: 'app-create-omnitheque',
  templateUrl: './create-omnitheque.component.html',
  styleUrls: ['./create-omnitheque.component.css']
})
export class CreateOmnithequeComponent implements OnInit {


  addressForm = new FormGroup({
    street: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),
    cp: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
  })
  omnithequeForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: this.addressForm,
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  })

  constructor(
    private _userService: UserService,
    private _omnithequeService : OmnithequeService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data => {
        this.omnithequeForm.patchValue({
          phone: data.phone,
          email: data.email
        })
        this.addressForm.patchValue({
          street: data.address.street,
          number: data.address.number.toString(),
          city: data.address.city,
          cp:data.address.cp.toString(),
          country:data.address.country,
        })
      }
    )
  }
  create() {
    this._omnithequeService.create(this.omnithequeForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.id}`]);
    })
  }
}
