import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service";
import {IAlbumsDeezer} from "../interface/ialbums-deezer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";
import {IAlbumsITunes} from "../interface/ialbums-itunes";
import {forkJoin} from "rxjs";
import {ITunes} from "../interface/itunes";


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private httpService: SearchService, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      inputText: ['']
    })
  }
  formGroup: FormGroup;
  searchDeezer: IAlbumsDeezer['data'] = [];
  iTunes: ITunes['results'] = [];

  ngOnInit(): void {

  }

  add(writeWord: string){
    const queryDeezer$ = this.httpService.getDeezer(writeWord);
    const queryITunes$ = this.httpService.getITunes(writeWord);

    forkJoin([queryDeezer$,queryITunes$]).subscribe(([deezer, itunes]) =>{
      this.iTunes = itunes.results;
      console.log(itunes.results);
      this.searchDeezer = deezer.data
      console.log(deezer.data);
    })
  }
}
