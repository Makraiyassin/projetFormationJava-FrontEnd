import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-update-omnitheque',
  templateUrl: './update-omnitheque.component.html',
  styleUrls: ['./update-omnitheque.component.css']
})
export class UpdateOmnithequeComponent implements OnInit {

  addressForm = new FormGroup({
    street: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),
    cp: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
  })
  omnithequeForm = new FormGroup({
    id : new FormControl(),
    name: new FormControl("", [Validators.required]),
    address: this.addressForm,
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  })

  // @ts-ignore
  constructor(
    private _userService: UserService,
    private _omnithequeService : OmnithequeService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data => {
        this.omnithequeForm.patchValue({
          id: data.omnitheque.id,
          name: data.omnitheque.name,
          phone: data.phone,
          email: data.email
        })
        this.addressForm.patchValue({
          street: data.omnitheque.address.street,
          number: data.omnitheque.address.number.toString(),
          city: data.omnitheque.address.city,
          cp:data.omnitheque.address.cp.toString(),
          country:data.omnitheque.address.country,
        })
      }
    )
  }

  update() {
    console.log(this.omnithequeForm.value)
    this._omnithequeService.update(this.omnithequeForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.id}`]);
    })

  }
  cancel() {
    this._router.navigate([`/omnitheque/${this.omnithequeForm.value.id}`]);
  }
}
