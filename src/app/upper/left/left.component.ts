import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  public library_contents = ['Made For You', 'Recently Played', 'Liked Songs', 'Albums', 'Artists','Playlists'];
  selectedItem = "";
  title: number;
  constructor(private appservice: ShareDataService) { }

  ngOnInit() {

  }


  public display(content) {
    this.selectedItem = content;
    this.appservice.updateCenterHeader(this.selectedItem);
  }

}
