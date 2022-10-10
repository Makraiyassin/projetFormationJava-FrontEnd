import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(
    private _postService : PostService,
    private _route : ActivatedRoute,
  ) { }


  ngOnInit(): void {
    console.log(this._route.snapshot.url)
    if(this._route.snapshot.url[0].path == "omnitheque"){
      console.log("omnitheque")
    }

  }

}
