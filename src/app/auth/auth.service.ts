import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from './jwt-response';
import {AuthLoginInfo} from './login-info';
import {SignUpInfo} from './sigup-info';
import {UpdateInfo} from './update-info';
import {ChangePassWord} from './ChangePassWord';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL_AUTH = 'http://localhost:8080/api/';
  private loginUrl = this.BASE_URL_AUTH + 'auth/signin';
  private signupUrl = this.BASE_URL_AUTH + 'auth/signup';
  private updateProfileUrl = this.BASE_URL_AUTH + 'auth/updateuser';
  private changePassWordUrl = this.BASE_URL_AUTH;

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  updateProfile(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateProfileUrl, info);
  }

  changePassWord(info: ChangePassWord): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.changePassWordUrl, info, httpOptions);
  }
}
