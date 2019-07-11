import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Song{
  author = "";
  name = "";
  src = "";
  constructor(src: string, author: string, name: string) {
    this.src = src;
    this.author = author;
    this.name = name;
  }
}


export class ShareLowerDataService {
  item: Song = null;
  song: BehaviorSubject<Song>;
  constructor() {
    this.item = new Song("", "", "");
    this.song = new BehaviorSubject(new Song("","","") );
  }

  updateSongData(content) {
    console.log(this.song)
    console.log(content);
    this.song.next(content)
  }
}
