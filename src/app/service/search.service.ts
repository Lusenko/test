import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbumsDeezer} from "../interface/ialbums-deezer";
import {Observable} from "rxjs";
import {ITunes} from "../interface/itunes";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly httpClient: HttpClient) { }

  getDeezer(writeWord: string): Observable<IAlbumsDeezer>{
    return this.httpClient.get<IAlbumsDeezer>(`api/search?q=artist:'${writeWord}'`);
  }
  getITunes(writeWord: string): Observable<ITunes>{
    return this.httpClient.get<ITunes>(`https://itunes.apple.com/search?term=${writeWord}&attribute=actorTerm`);
  }
}
