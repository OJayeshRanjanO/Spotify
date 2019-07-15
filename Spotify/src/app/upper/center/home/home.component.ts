import { Component, OnInit } from '@angular/core';
import { Song, ShareLowerDataService } from '../../../lower/share-lower-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  song_list = [
    [
      { "src": "https://i.ytimg.com/vi/lX44CAz-JhU/maxresdefault.jpg", "author": "Summer Day", "name": "The Wolf" },
      { "src": "https://i.ytimg.com/vi/UOxkGD8qRB4/maxresdefault.jpg", "author": "League Of Legends", "name": "KDA Pop Stars" },
      { "src": "https://i.ytimg.com/vi/BwEZaariQQ4/maxresdefault.jpg", "author": "Neffex", "name": "Rumors" },
      { "src": "https://i.ytimg.com/vi/CCuxv2O1IIA/maxresdefault.jpg", "author": "STéLOUSE", "name": "Sociopath" }
    ],
    [
      { "src": "https://i.ytimg.com/vi/CXNv4_wQjKQ/maxresdefault.jpg", "author": "5SOS", "name": "Young Blood" },
      { "src": "https://i.ytimg.com/vi/Q_NB5luxtic/maxresdefault.jpg", "author": "Bryce Fox", "name": "Horns (STéLOUSE Remix)" },
      { "src": "https://i.ytimg.com/vi/eS_korRhTDk/maxresdefault.jpg", "author": "Lemaitre", "name": "Closer ft. Jennie A. (UK Version)" },
      { "src": "https://i.ytimg.com/vi/8GotXeCwUnc/hqdefault.jpg", "author": "Merk & Kremont", "name": "Sad Story (Out Of Luck)" }
    ]


  ]
  constructor(private appservice: ShareLowerDataService) { }

  ngOnInit() {

  }

  public playSong(i,j) {
    this.appservice.updateSongData(this.song_list[i][j]);
  }

}
