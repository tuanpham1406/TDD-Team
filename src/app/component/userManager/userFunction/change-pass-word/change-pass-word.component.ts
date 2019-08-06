import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/userManager/auth/auth.service';
import {ChangePassWord} from '../../../../model/request/userManager/changePassWord';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-pass-word',
  templateUrl: './change-pass-word.component.html',
  styleUrls: ['./change-pass-word.component.scss']
})
export class ChangePassWordComponent implements OnInit {
  form: any = {};
  changePassWord: ChangePassWord;
  errorMessage = '';
  changeForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ngSubmit() {
    this.changePassWord = new ChangePassWord(this.form.currentPassword, this.form.newPassword);

    this.authService
      .changePassWord(this.changePassWord)
      .subscribe(
      data => {
                  console.log(data);
                  window.location.reload(); },
      error => {
                  console.log(error);
                  this.errorMessage = error.error.message; });
  }

}
