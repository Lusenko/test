import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service";
import {IAlbums} from "../interface/ialbums";
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
  search!: IAlbums['data'];

  ngOnInit(): void {

  }

}
