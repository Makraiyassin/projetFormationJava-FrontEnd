import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  inputSearch = new FormGroup({
    nameToSearch: new FormControl()
  })

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    this._router.navigate(["/search",this.inputSearch.value.nameToSearch] )
  }
}
