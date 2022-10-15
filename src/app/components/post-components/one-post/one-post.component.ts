import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../../models/IProduct";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  constructor(
    private _postService : PostService,
    private _route : ActivatedRoute,
    private _router: Router
  ) { }

  urlSegments : string [] = this._router.url.split("/");
  post !: IPost;
  postContent !: String [];

  ngOnInit(): void {
    this._postService.getOne(this._route.snapshot.params["id"]).subscribe(data => {
      this.post = data;
      this.postContent = data.content.split("\n");
      console.log(this.postContent);
    } );
  }

  backFromOmni(){
    let urlSegments = this._router.url.split("/");
    this._router.navigate([
      urlSegments[0],
      urlSegments[1],
      urlSegments[2],
      urlSegments[3]
    ]);
  }

  backFromHome( ){
    let urlSegments = this._router.url.split("/");
    this._router.navigate([
      urlSegments[0]
    ]);
  }

}
