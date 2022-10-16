import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor(
    private _userService : UserService,
    private _route : ActivatedRoute,

  ) { }

  user !: IUser;


  ngOnInit(): void {
    this._userService.getInfos(this._route.snapshot.params["id"]).subscribe(
      data=>{this.user = data},
      error=>{console.log(error)}
    )
  }

}
