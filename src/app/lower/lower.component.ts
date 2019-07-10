import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.scss']
})
export class LowerComponent implements OnInit {
  sound = null;
  isPlaying = false;
  seek_value: number = 0
  mymusic = ['http://dl27.youtubeconverter.io/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ3FuZE04d2dnY0U3NUJxWjg4Nk9pNU1jQk1QWmdaeEk2bkh1RjI0aHZpY05HWk9UNjQ0dFlyVWlESDhkOHh2QURmOHBvb0JJd2pjQS8zanZLMmxEUXoyeUg0Ym91SVI1NEhLQ1ZkdWhKdTBqS1dndkxidEY2MStIT29vVXVHZEJzWXB6WUVMK2J2L1laYTNHcllVT0h0MTVVS2tnU0l4NkJJMitLVWhUQ2lqYjh1NjVwMlVrMXhmWVIwNmNla2o2aUM5QkJBenN0TmxCLzIvNlNqSG80OERxQ0tjRHAxWTNOY3Y3MjRCVTlPblhVPQ%3D%3D',]
  playlist_counter = 0
  timePlayed = 0;
  constructor() { }

  ngOnInit() {
    this.isPlaying = false;
    this.playlist_counter = 0;
    this.timePlayed = 0;
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
