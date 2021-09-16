import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from "../service/search.service";
import {IAlbumsDeezer} from "../interface/ialbums-deezer";
import {ITunes} from "../interface/itunes";
import {FormBuilder, FormGroup} from "@angular/forms";
import {forkJoin, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  constructor(private httpService: SearchService, formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      inputText: ['']
    })
  }

  searchDeezer: IAlbumsDeezer['data'] = [];
  iTunes: ITunes['results'] = [];

  destroy = new Subject();
  formGroup: FormGroup;
  showTitle = false;

  ngOnInit(): void { }

  addItemInCards(writeWord: string){
    const queryDeezer$ = this.httpService.getDeezer(writeWord);
    const queryITunes$ = this.httpService.getITunes(writeWord);

    forkJoin([queryDeezer$,queryITunes$]).pipe(takeUntil(this.destroy))
      .subscribe(([deezer, itunes]) =>{
        this.showTitle = true;
        this.iTunes = itunes.results;
        this.searchDeezer = deezer.data;
      })
  }
  ngOnDestroy(){
    this.destroy.next(null);
    this.destroy.complete();
  }
}
