export class UpdateInfo {
  firstName: string;
  lastName: string;
  email: string;
  avatar: File;

  constructor(firstName: string, lastName: string, email: string, avatar: File) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
  }
}
