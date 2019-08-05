import { Injectable } from '@angular/core';
import {PathAPI} from '../pathAPI';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SongInfor} from '../../model/request/featureSong/song-infor';
import {Observable} from 'rxjs';
import {JwtResponse} from '../../model/response/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class SongService {
  private pathAPI: PathAPI;
  private creatSongUrl = this.pathAPI.API_SONG + '/create';
  private updateSongUrl = this.pathAPI.API_SONG + '/update';
  private listSongUrl = this.pathAPI.API_SONG + '/list';
  constructor(private http: HttpClient) { }

  createSong(song: SongInfor): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.creatSongUrl, song, httpOptions);
  }
  updateSong(song: SongInfor): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateSongUrl, song, httpOptions);

  }
  listSong(song: SongInfor): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.updateSongUrl, song, httpOptions);
  }
}
