import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {Router} from "@angular/router";

declare let cloudinary: any ;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private _postService : PostService,
    private _router : Router
  ) { }

  postForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })

  ngOnInit(): void {
    this.postForm.patchValue({image:"http://res.cloudinary.com/dsuyae7y8/image/upload/v1665739816/o7awf1sqh62q0nolkcss.png"})
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

  create(){
    this._postService.create(this.postForm.value).subscribe(
      data => this._router.navigate([`/omnitheque/${data.omnithequeId}/publications`])
    )
  }


}
