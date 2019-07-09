import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.scss']
})
export class LowerComponent implements OnInit {
  sound = null;
  constructor() { }

  ngOnInit() {

  }
  
  public playSong() {

    this.sound = new Howl({
      src: 'http://prclive1.listenon.in:9960/?fbclid=IwAR1bAO9Hf-yvOGrjKVVdYt0XXnqo85o1G2IXWrzVtjIujOit5JqW7oQUtfI',
      format: ['mp3', 'aac'],
      autoplay: true,
      html5: true
    });

    this.sound.play()

  }

  public pauseSong() {
    this.sound.pause()

  }

  public getPos() {
    console.log(this.sound.pos)
  }

}
