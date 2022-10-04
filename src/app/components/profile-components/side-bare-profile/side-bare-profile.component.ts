import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-side-bare-profile',
  templateUrl: './side-bare-profile.component.html',
  styleUrls: ['./side-bare-profile.component.css']
})
export class SideBareProfileComponent implements OnInit {
  private _user !: IUser;
  get user(): IUser {
    return this._user;
  }

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data => {
        this._user = data;
      }
    )
  }

}
