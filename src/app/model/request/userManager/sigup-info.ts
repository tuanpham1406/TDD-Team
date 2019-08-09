export class SignUpInfo {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassWord: string;
  role: string[];
  avatar: File;

  constructor(firstName: string, lastName: string, username: string, email: string, password: string, confirmPassWord: string,
              avatar: File) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassWord = confirmPassWord;
    this.role = ['user'];
    this.avatar = avatar;
  }
}
