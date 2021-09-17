import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AlbumInfoComponent } from './album-info/album-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumInfoComponent
  ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      HttpClientJsonpModule,
      AppRoutingModule,
      
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
