import { Component, OnInit } from '@angular/core';
import {OmnithequeService} from "../../../services/omnitheque.service";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {IUser} from "../../../models/IUser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bare-omnitheque',
  templateUrl: './side-bare-omnitheque.component.html',
  styleUrls: ['./side-bare-omnitheque.component.css']
})
export class SideBareOmnithequeComponent implements OnInit {

  omnitheque!: IOmnitheque;
  user!: IUser;

  constructor(
    private _omnithequeService : OmnithequeService,
    private _userService : UserService,
    private _route: ActivatedRoute,

) {}

  ngOnInit(): void {
    this._userService.getUser().subscribe(data => {
      this.user = data;
    })
    this._omnithequeService.getOne(this._route.snapshot.params["id"]).subscribe(data => {
      this.omnitheque = data;
    })
  }

}
