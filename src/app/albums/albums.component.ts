import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service";
import {IalbumsDeezer} from "../interface/ialbums-deezer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";

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
  search!: IalbumsDeezer['data'];

  ngOnInit(): void {

  }

  add(writeWord: string){
    this.httpService.getDeezer(writeWord)
        .pipe(
            tap(item => {
              this.search = item.data
            })
        ).subscribe()
  }

}
