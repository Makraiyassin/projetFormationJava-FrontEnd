import { Component, OnInit } from '@angular/core';
import {IOmnitheque} from "../../../models/IOmnitheque";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  private _omnithequeList!: IOmnitheque[];
  get omnithequeList(): IOmnitheque[] {
    return this._omnithequeList;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
