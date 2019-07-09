import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-moods',
  templateUrl: './genre-moods.component.html',
  styleUrls: ['./genre-moods.component.scss']
})
export class GenreMoodsComponent implements OnInit {

  genres = [
    { "src": "https://media.istockphoto.com/videos/usa-summer-day-miami-south-beach-classic-panorama-4k-florida-video-id509401900?s=640x640", "text": "Summer Day" },
    { "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWpVgpVRk-4cuOIGbLc9gzvT4cQdND0YO1eOiyc-Tn6l9F9T8Ow", "text": "Pop" },
    { "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y-PO3Jl3c6zONNclpngervvIICvcYpZ4oS1a7DE_muGY9g85", "text": "Hip-Hop" },
    { "src": "http://www.brooklynvegan.com/files/2019/06/worldpride-march2019-001.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89", "text": "Pride" }

  ]
  constructor() { }

  ngOnInit() {

  }

}
