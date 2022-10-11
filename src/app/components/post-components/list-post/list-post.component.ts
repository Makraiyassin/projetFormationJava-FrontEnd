import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../models/IPost";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../models/IUser";

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
    private _userService : UserService,
    private _router : Router
  ) { }

  omnitheque!: IOmnitheque;
  user!: IUser;
  postList !: IPost[];
  posts !: IPost[];

  page = 1;
  pageSize = 3;
  collectionSize !: number;

  ngOnInit(): void {
    this._userService.getUser().subscribe(data => {
      this.user = data;
    })
    if(this._router.url.split("/")[1] == "omnitheque"){
      if(this._route.snapshot.parent ){
        this._omnithequeService.getOne(this._route.snapshot.parent.params["id"]).subscribe( data =>{
          this.postList = data.postList
          this.collectionSize =  data.postList.length;
          this.omnitheque = data
          this.refreshPosts();
        });
      }

    }
    else{
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

  delete(id : number){
    if(confirm("êtes-vous sûr de vouloir sulpprimer cette publication?")){
      this._postService.delete(id).subscribe(data=>{
        this.posts = this.posts.filter(p=>p.id != id);
      });
    }
  }
}
