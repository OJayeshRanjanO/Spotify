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
  mymusic = ['https://r4---sn-ab5sznly.googlevideo.com/videoplayback?expire=1563415709&ei=PYAvXdWPKb6F2LYPzZ-M8Ag&ip=108.179.21.226&id=o-APp07jBuaVhDXsuG_Z7iQ5_bovrvRt39davMMYr3ePTI&itag=171&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-ab5sznly%2Csn-tt1eln7s&ms=au%2Conr&mv=m&mvi=3&pl=18&initcwndbps=1436250&mime=audio%2Fwebm&gir=yes&clen=3355302&dur=202.888&lmt=1541539155526123&mt=1563394028&fvip=4&keepalive=yes&c=WEB&txp=3511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ALgxI2wwRAIgTf0cE4z-eBie66nofyZru-9owtcDg_bQig7JRbML3BECIHpa5n85jye0nOJlmopvaTObtIPERQNx3qr3-8iq-UEp&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIgPPgbIy0cBGZ7XTpl1xjwzLKPOEQAjBKJMxJ--4Kc4kMCIQCT3PT0W1VJNRQ4QmhwY0H2W6N6eZJYorlS-JZb7_i-Aw%3D%3D&ratebypass=yes']
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
