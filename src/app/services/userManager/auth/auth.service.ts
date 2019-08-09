import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from '../../../model/response/jwt-response';
import {AuthLoginInfo} from '../../../model/request/userManager/login-info';
import {UpdateInfo} from '../../../model/request/userManager/update-info';
import {ChangePassWord} from '../../../model/request/userManager/changePassWord';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly API = 'http://localhost:8080/api/';
  private loginUrl = this.API + 'auth/signin';
  private signupUrl = this.API + 'auth/signup';
  private updateProfileUrl = this.API + 'auth/updateuser';
  private changePassWordUrl = this.API + 'auth/changePassword';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: FormData): Observable<HttpEvent<{}>> {
    const req = new HttpRequest('POST', this.signupUrl, info, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  updateProfile(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateProfileUrl, info, httpOptions);
  }

  changePassWord(info: ChangePassWord): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.changePassWordUrl, info, httpOptions);
  }
}
