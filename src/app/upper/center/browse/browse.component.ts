import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  browse_list = ['GENRES & MOODS', 'PODCASTS', 'CHARTS', 'NEW RELEASES', 'DISCOVER','CONCERTS']
  constructor() { }

  ngOnInit() {
  }

}
