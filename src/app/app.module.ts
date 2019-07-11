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
import { LeftMenuComponent } from './upper/left/left-menu/left-menu.component';
import { LibraryComponent } from './upper/left/library/library.component';
import { PlaylistsComponent } from './upper/left/playlists/playlists.component';
import { UpperComponent } from './upper/upper.component';
import { LowerComponent } from './lower/lower.component';
import { BrowseComponent } from './upper/center/browse/browse.component';
import { GenreMoodsComponent } from './upper/center/browse/genre-moods/genre-moods.component';
import { HomeComponent } from './upper/center/home/home.component';

import { Song, ShareLowerDataService } from './lower/share-lower-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    CenterComponent,
    LeftMenuComponent,
    LibraryComponent,
    PlaylistsComponent,
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
