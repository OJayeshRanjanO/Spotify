import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Song, ShareLowerDataService } from '../lower/share-lower-data.service';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.scss']
})
export class LowerComponent implements OnInit {
  sound = null;
  isPlaying = false;
  seek_value: number = 0
  mymusic = []
  playlist_counter:number = 0
  timePlayed:number = 0;
  volume:number = 0;



  song1: Song = null;

  constructor(private appservice: ShareLowerDataService) { }

  ngOnInit() {
    this.isPlaying = false;
    this.playlist_counter = 0;
    this.timePlayed = 0;


    this.appservice.song.subscribe(song => {
      console.log(this.song1);
      console.log(song)
      this.song1 = new Song("", song.author, song.name);
    });
  }

  public toggleIsPlaying() {
    console.log('toggleIsPlaying')
    console.log(this.sound)
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      if (this.sound == null) {
        this.changeSong(this.mymusic[0]);
      }
      console.log("play")
      this.sound.play()
    } else {
      console.log("pause")
      this.sound.pause()
    }

  }
  public changeSong(song) {

    this.sound = new Howl({
      src: song,
      format: ['mp3', 'aac'],
      autoplay: true,
      html5: true,
      onload: function () {
        console.log("on load")

      },
      onplay: function () {
        console.log("on play")
      },
      onseek: function () {
        console.log("on seek");
      }
    });
  }


  public nextSong() {
    console.log('nextSong');
    if (this.playlist_counter === this.mymusic.length - 1)
      this.playlist_counter = 0;
    else
      this.playlist_counter += 1;
    this.sound.stop()
    this.changeSong(this.mymusic[this.playlist_counter])
    this.isPlaying = false;
    this.toggleIsPlaying()
  }

  public previousSong() {
    console.log('previousSong');
    if (this.playlist_counter === 0)
      this.playlist_counter = this.mymusic.length - 1;
    else
      this.playlist_counter -= 1;
    this.sound.stop()
    this.changeSong(this.mymusic[this.playlist_counter])
    console.log(this.sound);
    this.isPlaying = false;
    this.toggleIsPlaying()

  }

  public getPos() {
    console.log("getPos()")
    console.log(this.sound.seek())
  }

  public setPos(pos) {
    console.log(pos,"setPos()")
    this.sound.seek(0)
  }
  public seek(event) {
    var width = event.srcElement.clientWidth;
    var layerX = event.layerX;
    this.seek_value = (layerX / width) * 100
  }

}
