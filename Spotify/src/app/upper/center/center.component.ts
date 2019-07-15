import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../share-data.service';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  title: string;

  constructor(private appservice: ShareDataService) { }
  ngOnInit() {
    this.appservice.title.subscribe(title => {
      this.title = title;
    });
  }

}
