import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumInfoComponent} from "./album-info/album-info.component";

const routes: Routes =[
  {path: '', component: AlbumsComponent},
  {path: 'albumInfo/:id', component: AlbumInfoComponent}
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
