import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

declare let cloudinary: any ;

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
    private _router : Router
  ) { }

  postForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })
  ngOnInit(): void {
    this._postService.getOne(this._route.snapshot.params["id"]).subscribe(data => {
      this.postForm.patchValue({
        id: data.id,
        title: data.title,
        content: data.content,
        image: data.image
      })
    })
  }

  edit(){
    this._postService.update(this.postForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }

  cloudinaryGo(){
    var myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dsuyae7y8',
        uploadPreset: 'omnitheque-preset'
      },
      (error:any,result:any)=> {
        if (!error && result && result.event === "success") {
          this.postForm.patchValue({image: result.info.url})
        }
      }
    );

    myWidget.open()
  }

}
