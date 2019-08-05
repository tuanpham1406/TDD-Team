import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/userManager/auth/auth.service';
import {TokenStorageService} from '../../../../services/userManager/token/token-storage.service';
import {UpdateInfo} from '../../../../model/request/userManager/update-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent implements OnInit {

  form: any = {};
  progress = 0;
  updateInfo: UpdateInfo;
  isUpdated = false;
  isUpdateFailed = false;
  errorMessage = '';
  data: FormData = new FormData();
  fileList: FileList;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) {
  }

  ngOnInit() {
  }

  fileChange(event) {
    this.fileList = event.target.files;
  }

  onSubmit() {
    this.updateInfo = new UpdateInfo(
      this.form.firstName,
      this.form.lastName,
      this.form.email
    );
    // this.data = toFormData(this.updateInfo);
    this.authService
      .updateProfile(this.updateInfo)
      .subscribe(
      data => {
                  console.log(data);
                  this.isUpdated = true;
                  this.isUpdateFailed = false;
                  // this.tokenStorage.saveAvatarLink(data.avatarLink);
                  this.router.navigate(['/home']);
                   },
      error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isUpdateFailed = true; });
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

