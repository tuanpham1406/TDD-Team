import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/userManager/user/user.service';
import {TokenStorageService} from '../../../../services/userManager/token/token-storage.service';

function AuthInfo() {
  if (this.token.getToken()) {
    if (this.token.getAvatarLink() !== '') {
      this.avatarLink = this.token.getAvatarLink();
    }
    this.roles = this.token.getAuthorities();
    this.roles.every(role => {
      if (role === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      } else if (role === 'ROLE_PM') {
        this.authority = 'pm';
        return false;
      }
      this.authority = 'user';
      return true;
    });
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private avatarLink: string;
  board: string;
  errorMessage: string;
  info: any;
  private roles: string[];
  protected authority: string;

  constructor(private userService: UserService, private token: TokenStorageService) {
  }

  ngOnInit() {
    AuthInfo.call(this);
    this.userService.getUserBoard().subscribe(
      data => {this.board = data; },
      error => {this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`; });
    this.info = {
          token: this.token.getToken(),
          username: this.token.getUsername(),
          authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
