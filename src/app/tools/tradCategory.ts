export function tradCategory(category : string) {
  switch (category){
    case "BOOK":
      return "Livre"
    case "BOARDGAME":
      return "Jeux de société"
    case "VIDEOGAME":
      return "Jeux vidéo"
    case "MOVIE":
      return "Film"
    case "MUSIC":
      return "Musique"
    default:
      return "Livre"
  }
}
