import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ChangePassWord} from '../auth/ChangePassWord';
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

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    // this.changeForm = this.fb.group({
    //   currentPassword: ['', Validators.required, Validators.minLength(6)],
    //   pwGroup: this.fb.group({
    //     newPassword: ['', [Validators.required, Validators.minLength(6)]],
    //     confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    //   }, {validator: comparePassword})
    // });
  }

  ngSubmit() {
    debugger;
    this.changePassWord = new ChangePassWord(
      this.form.currentPassword,
      this.form.newPassword
    );
    this.authService.changePassWord(this.changePassWord).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
