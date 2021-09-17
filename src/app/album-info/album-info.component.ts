import { Component, OnInit } from '@angular/core';
import {AlbumInfoService} from "../service/album-info.service";
import {map, tap} from "rxjs/operators";
import {IAlbumsDeezer} from "../interface/ialbums-deezer";
import {ActivatedRoute, Route} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IDeezer} from "../interface/ideezer";
import {IData} from "../interface/idata";

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {

  deezerInfo?: IDeezer;
  deezerInfoTitle: IData['data'] = [];
  showTitle = false;
  formGroup: FormGroup;

  constructor(private httpAlbumInfoService: AlbumInfoService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      infoAlbum: ['']
    })
  }


  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
    this.httpAlbumInfoService.getAlbumInfoDeezer(id)
      .pipe(
       tap(item => {
         this.deezerInfo = item
         console.log(item);
       }),
       tap(item => {
         this.showTitle = true;
         this.deezerInfoTitle = item.tracks.data
         console.log(item.tracks.data);
       })
      ).subscribe()
  }
}
