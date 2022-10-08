import { Component, OnInit } from '@angular/core';
import {IOmnitheque} from "../../../models/IOmnitheque";
import {OmnithequeService} from "../../../services/omnitheque.service";

@Component({
  selector: 'app-list-omnitheques',
  templateUrl: './list-omnitheques.component.html',
  styleUrls: ['./list-omnitheques.component.css']
})
export class ListOmnithequesComponent implements OnInit {

  private _omnithequeList!: IOmnitheque[];

  constructor(private _service : OmnithequeService) {}

  ngOnInit(): void {
    this._service.getAll().subscribe(
      data => {
        this._omnithequeList = [...data];
        this.collectionSize = this._omnithequeList.length
        this.refreshOmnitheques();
      }
    )
  }

  page = 1;
  pageSize = 6;
  collectionSize !: number;
  omnitheques!: IOmnitheque[];

  refreshOmnitheques() {
    this.omnitheques = this._omnithequeList.slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize)
  }


}

