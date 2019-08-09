import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './component/userManager/auth/register/register.component';
import {LoginComponent} from './component/userManager/auth/login/login.component';
import {HomeComponent} from './component/layoutWebsite/home/home.component';
import {UserComponent} from './component/userManager/users/user/user.component';
import {PmComponent} from './component/userManager/users/pm/pm.component';
import {AdminComponent} from './component/userManager/users/admin/admin.component';
import {ChangePassWordComponent} from './component/userManager/userFunction/change-pass-word/change-pass-word.component';
import {UpdateInfoComponent} from './component/userManager/userFunction/update-info/update-info.component';
import {AppComponent} from './app.component';
import {CreatSongComponent} from './component/featureSong/creat-song/creat-song.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: RegisterComponent},
  {path: 'auth/change-password', component: ChangePassWordComponent},
  {path: 'auth/update-profile', component: UpdateInfoComponent},
  {path: 'song/create-song', component: CreatSongComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
