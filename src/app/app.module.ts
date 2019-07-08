import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CenterComponent } from './center/center.component';
import { BottomComponent } from './bottom/bottom.component';
import { LeftMenuComponent } from './left/left-menu/left-menu.component';
import { LibraryComponent } from './left/library/library.component';
import { PlaylistsComponent } from './left/playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    CenterComponent,
    BottomComponent,
    LeftMenuComponent,
    LibraryComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
