import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  title_text = "Home";
  title: BehaviorSubject<string>;
  constructor() {
    this.title = new BehaviorSubject(this.title_text);
  }

  updateCenterHeader(content) {
    this.title.next(content)
  }
}
