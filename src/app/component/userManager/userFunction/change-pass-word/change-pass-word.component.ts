import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/userManager/auth/auth.service';
import {ChangePassWord} from '../../../../model/request/userManager/changePassWord';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.newPassword === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

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

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {}

  ngSubmit() {
    debugger;
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
