// import { Injectable } from '@angular/core';
// import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {stringify} from 'querystring';
// import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
// import {AngularFireStorage} from '@angular/fire/storage';
// import {FileUpload} from '../../model/request/uploadFile/UploadFile';
// import {finalize} from 'rxjs/operators';
//
//
// @Injectable({providedIn: 'root'})
// export class UploadFileService {
//   private basePath = '/uploads';
//
//   constructor(
//     private db: AngularFireDatabase,
//     private storage: AngularFireStorage
//   ) { }
//
//   pushFileToStorage(fileUpload: FileUpload): Observable<number> {
//     const filePath = `${this.basePath}/${fileUpload.file.name}`;
//     const storageRef = this.storage.ref(filePath);
//     const uploadTask = this.storage.upload(filePath, fileUpload.file);
//
//     uploadTask
//       .snapshotChanges()
//       .pipe(finalize(() => {
//         storageRef
//           .getDownloadURL()
//           .subscribe(downloadURL => {
//                   console.log('File available at', downloadURL);
//                   fileUpload.url = downloadURL;
//                   fileUpload.name = fileUpload.file.name;
//                   this.saveFileData(fileUpload); });
//       })).subscribe();
//
//     return uploadTask.percentageChanges();
//   }
//
//   private saveFileData(fileUpload: FileUpload) {
//     this.db.list(this.basePath).push(fileUpload);
//   }
//
//   getFileUploads(numberItems): AngularFireList<FileUpload> {
//     return this.db.list(this.basePath, ref =>
//       ref.limitToLast(numberItems));
//   }
//
//   deleteFileUpload(fileUpload: FileUpload) {
//     this.deleteFileDatabase(fileUpload.key)
//       .then(() => {this.deleteFileStorage(fileUpload.name);})
//       .catch(error => console.log(error));
//   }
//
//   private deleteFileDatabase(key: string) {
//     return this.db.list(this.basePath).remove(key);
//   }
//
//   private deleteFileStorage(name: string) {
//     const storageRef = this.storage.ref(this.basePath);
//     storageRef.child(name).delete();
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
private createUrl = 'http://localhost:8080/post';
private readUrl = 'http://localhost:8080/getallfiles';
  constructor(private http: HttpClient) { }

  // getUserBoard(): Observable<string> {
  //   return this.http.get(this.userUrl, {responseType: 'text'});
  // }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.createUrl, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    debugger;
    return this.http.get(this.readUrl);
  }
}

