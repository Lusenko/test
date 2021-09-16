import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      HttpClientJsonpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
