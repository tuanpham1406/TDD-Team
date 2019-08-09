import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../../../services/userManager/auth/auth.service';
import {SignUpInfo} from '../../../../model/request/userManager/sigup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  avatar: File;
  fileList: FileList;
  data: FormData = new FormData();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  fileChange(event) {
    this.fileList = event.target.files;
    this.avatar = this.fileList[0];
  }

  onSubmit() {
    this.signupInfo = new SignUpInfo(
      this.form.firstName,
      this.form.lastName,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.confirmPassWord,
      this.avatar
    );

    this.data = toFormData(this.signupInfo);
    this.authService.signUp(this.data).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      });
  }
}

export function toFormData<T>(formValue: T) {
  const formData = new FormData();
  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }
  return formData;
}
