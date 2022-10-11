import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../models/IPost";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {IOmnitheque} from "../../../models/IOmnitheque";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(
    private _omnithequeService : OmnithequeService,
    private _postService : PostService,
    private _route : ActivatedRoute,
  ) { }

  postList !: IPost[];
  posts !: IPost[];

  page = 1;
  pageSize = 3;
  collectionSize !: number;

  ngOnInit(): void {
    if(this._route.snapshot.url[0]?.path == "publications"){
      if(this._route.snapshot.parent ){
        this._omnithequeService.getOne(this._route.snapshot.parent.params["id"]).subscribe( data =>{
          this.postList = data.postList
          this.collectionSize =  data.postList.length;
          this.refreshPosts();
        });
      }

    }else{
      this._postService.getAll().subscribe(data => {
        this.postList = data;
        this.collectionSize =  data.length
        this.refreshPosts()
      })
    }
  }
  refreshPosts() {
    this.posts = this.postList
      .sort((a,b) => a.date < b.date ? 1 : a.date == b.date ? 0 : -1)
      .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  }
}
