import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbums} from "../interface/ialbums";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly httpClient: HttpClient) { }

  http = 'https://api.deezer.com/search?q=radiohead';

  getDeezer(): Observable<IAlbums>{
    return this.httpClient.get<IAlbums>(this.http);
  }
}
