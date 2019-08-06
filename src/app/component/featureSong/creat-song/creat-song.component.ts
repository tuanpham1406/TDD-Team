// import {Component, OnInit} from '@angular/core';
//
// import {SongService} from '../../../services/featureSong/song.service';
// import {Router} from '@angular/router';
// import {FileUpload} from '../../../model/request/uploadFile/UploadFile';
// import {UploadFileService} from '../../../services/uploadFile/upload-file.service';
//
//
// @Component({
//   selector: 'app-creat-song',
//   templateUrl: './creat-song.component.html',
//   styleUrls: ['./creat-song.component.scss']
// })
// export class CreatSongComponent implements OnInit {
//   selectedFiles: FileList;
//   currentFileUpload: FileUpload;
//   percentage: number;
//
//   constructor(
//     private songService: SongService,
//     private router: Router,
//     private uploadService: UploadFileService) {
//   }
//
//   ngOnInit() {}
//
//   selectFile(event) {
//     this.selectedFiles = event.target.files;
//   }
//
//   upload() {
//     const file = this.selectedFiles.item(0);
//     this.selectedFiles = undefined;
//
//     this.currentFileUpload = new FileUpload(file);
//     this.uploadService
//       .pushFileToStorage(this.currentFileUpload)
//       .subscribe(percentage => {
//           // @ts-ignore
//           this.percentage = Math.round(percentage); },
//         error => {console.log(error); }
//       );
//   }
// }


import { Component, OnInit, Input } from '@angular/core';
import {UploadFileService} from '../../../services/uploadFile/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-creat-song',
  templateUrl: './creat-song.component.html',
  styleUrls: ['./creat-song.component.scss']
})
export class CreatSongComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  showFile = false;
  fileUploads: Observable<string[]>;
  constructor(private uploadService: UploadFileService) { }

  @Input() fileUpload: string;

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }
  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}
