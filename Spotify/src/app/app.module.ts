import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './upper/left/left.component';
import { RightComponent } from './upper/right/right.component';
import { CenterComponent } from './upper/center/center.component';
import { UpperComponent } from './upper/upper.component';
import { LowerComponent } from './lower/lower.component';
import { BrowseComponent } from './upper/center/browse/browse.component';
import { GenreMoodsComponent } from './upper/center/browse/genre-moods/genre-moods.component';
import { HomeComponent } from './upper/center/home/home.component';

import { Song, ShareLowerDataService } from './lower/share-lower-data.service';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    CenterComponent,
    UpperComponent,
    LowerComponent,
    BrowseComponent,
    GenreMoodsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  providers: [ShareLowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
