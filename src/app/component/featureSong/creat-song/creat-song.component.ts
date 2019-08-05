import {Component, OnInit} from '@angular/core';

import {SongService} from '../../../services/featureSong/song.service';
import {Router} from '@angular/router';
import {SongInfor} from '../../../model/request/featureSong/song-infor';
import {FileUpload} from '../../../model/request/uploadFile/UploadFile';
import {UploadFileService} from '../../../services/uploadFile/upload-file.service';


@Component({
  selector: 'app-creat-song',
  templateUrl: './creat-song.component.html',
  styleUrls: ['./creat-song.component.scss']
})
export class CreatSongComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(
    private songService: SongService,
    private router: Router,
    private uploadService: UploadFileService) {
  }

  ngOnInit() {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService
      .pushFileToStorage(this.currentFileUpload)
      .subscribe(percentage => {
          this.percentage = Math.round(percentage);},
          error => {console.log(error);}
      );
  }

}
