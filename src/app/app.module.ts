import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    LowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
