import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from '../../../model/response/jwt-response';
import {AuthLoginInfo} from '../../../model/request/userManager/login-info';
import {SignUpInfo} from '../../../model/request/userManager/sigup-info';
import {UpdateInfo} from '../../../model/request/userManager/update-info';
import {ChangePassWord} from '../../../model/request/userManager/changePassWord';
import {PathAPI} from '../../pathAPI';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private updateProfileUrl = 'http://localhost:8080/api/auth/updateuser';
  private changePassWordUrl = 'http://localhost:8080/api/auth/changePassword';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  updateProfile(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateProfileUrl, info, httpOptions);
  }

  changePassWord(info: ChangePassWord): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.changePassWordUrl, info, httpOptions);
  }
}
