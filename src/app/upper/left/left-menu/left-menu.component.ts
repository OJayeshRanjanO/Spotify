import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../share-data.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private appservice: ShareDataService) { }
  ngOnInit() {

  }

  public display(text) {
    this.appservice.updateCenterHeader(text);

  }

}
