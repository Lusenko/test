import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbums} from "../interface/ialbums";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly httpClient: HttpClient) { }

  getDeezer(writeWord: string): Observable<IAlbums>{
    return this.httpClient.get<IAlbums>(`api/search/?q=artist:'${writeWord}'`);
  }
}
