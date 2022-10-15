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
    title: "Bibliothèque",
    description:" Du latin bibliotheca (« salle ou meuble contenant des livres »), lui-même emprunté au grec ancien βιβλιοθήκη , bibliothếkê (« lieu de dépôt de livres »)."
    },
    {
      img : "https://www.familiscope.fr/uploads/dossiers/0000/jeux-societe-600x337.jpg",
    title: "Ludothèque",
    description:" Du latin ludus (« jeu ») et du grec ancien θήκη , thếkê (« boite, entrepôt »). Remarque : ce mot est un mot hybride, étant composé d'un élément d'origine latine et d'un élément d'origine grecque."
    },
    {
      img : "http://ekladata.com/JTDPoOy4yu4VCxzVSbthJnED8aI@500x283.png",
    title: "Vidéothèque",
    description:"Une vidéothèque est une bibliothèque virtuelle ou physique de vidéos. Le concept est né d'installations dans des musées ou des galeries d'art, mais a été étendu aux vidéothèques sur les sites Web et aux bibliothèques physiques fixes et aux bibliothèques mobiles."
    },
  ]

  constructor() {
  }




  ngOnInit(): void {

  }
}
