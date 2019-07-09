import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../share-data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public library_contents = ['Made For You', 'Recently Played', 'Liked Songs', 'Albums', 'Artists', 'Podcasts'];
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
