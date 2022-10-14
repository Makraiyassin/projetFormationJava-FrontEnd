import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  slides = [
    {
      img : "https://media.istockphoto.com/photos/library-bookshelf-diminishing-perspective-picture-id160768331?b=1&k=20&m=160768331&s=612x612&w=0&h=tRjCvqPyAcQtZOp8XLHp39lnRBrEEalWSgkqVFFwF9U=",
    title: "bibliothèque",
    description:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img : "https://www.familiscope.fr/uploads/dossiers/0000/jeux-societe-600x337.jpg",
    title: "ludothèque",
    description:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img : "http://ekladata.com/JTDPoOy4yu4VCxzVSbthJnED8aI@500x283.png",
    title: "videotheque",
    description:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ]

  constructor() {
  }




  ngOnInit(): void {

  }
}
