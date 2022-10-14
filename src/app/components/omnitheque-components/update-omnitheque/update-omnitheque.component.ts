import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

declare let cloudinary: any ;

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
    image: new FormControl(),

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
          phone: data.omnitheque.phone,
          email: data.omnitheque.email,
          image: data.omnitheque.image
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
    this._omnithequeService.update(this.omnithequeForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.id}`]);
    })

  }
  cancel() {
    this._router.navigate([`/omnitheque/${this.omnithequeForm.value.id}`]);
  }

  cloudinaryGo(){
    var myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dsuyae7y8',
        uploadPreset: 'omnitheque-preset'
      },
      (error:any,result:any)=> {
        if (!error && result && result.event === "success") {
          this.omnithequeForm.patchValue({image: result.info.url})
        }
      }
    );

    myWidget.open()
  }
}
