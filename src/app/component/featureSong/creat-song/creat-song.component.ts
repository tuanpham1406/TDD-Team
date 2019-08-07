
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

  @Input() fileUpload: string;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    debugger;
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
    debugger;
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}
