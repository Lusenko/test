import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDeezer} from "../interface/ideezer";


@Injectable({
  providedIn: 'root'
})
export class AlbumInfoService {

  constructor( private readonly httpInfoService: HttpClient) { }

  getAlbumInfoDeezer(id: number): Observable<IDeezer> {

    const apiSearch = `https://api.deezer.com/album/${id}&output=jsonp`;
    return this.httpInfoService.jsonp<IDeezer>(apiSearch, 'callback');
  }
}
