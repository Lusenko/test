import { Injectable } from '@angular/core';
import {IAlbumsDeezer} from "../interface/ialbums-deezer";
import {ITunes} from "../interface/itunes";
import {HttpClient, HttpClientJsonpModule} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly httpClient: HttpClient, private jsonp: HttpClientJsonpModule) { }


  getDeezer(writeWord: string): Observable<IAlbumsDeezer>{
    writeWord = writeWord.trim();

    const apiSearch = `https://api.deezer.com/search?q=artist:'${writeWord}'&output=jsonp`;

    return this.httpClient.jsonp<IAlbumsDeezer>(apiSearch, 'callback');
  }

  getITunes(writeWord: string): Observable<ITunes>{
    return this.httpClient.get<ITunes>(`https://itunes.apple.com/search?term=${writeWord}&attribute=actorTerm`);
  }
}

