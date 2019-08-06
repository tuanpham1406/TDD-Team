import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/userManager/auth/login/login.component';
import {RegisterComponent} from './component/userManager/auth/register/register.component';
import {HomeComponent} from './component/layoutWebsite/home/home.component';
import {UserComponent} from './component/userManager/users/user/user.component';
import {PmComponent} from './component/userManager/users/pm/pm.component';
import {AdminComponent} from './component/userManager/users/admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor, httpInterceptorProviders} from './services/userManager/auth/auth-interceptor';
import { UpdateInfoComponent } from './component/userManager/userFunction/update-info/update-info.component';
import { ChangePassWordComponent } from './component/userManager/userFunction/change-pass-word/change-pass-word.component';
import { HeaderComponent } from './component/layoutWebsite/header/header.component';
import { FooterComponent } from './component/layoutWebsite/footer/footer.component';
import { CreatSongComponent } from './component/featureSong/creat-song/creat-song.component';
import { UpdateSongComponent } from './component/featureSong/update-song/update-song.component';
import { ListSongComponent } from './component/featureSong/list-song/list-song.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    UpdateInfoComponent,
    ChangePassWordComponent,
    HeaderComponent,
    FooterComponent,
    CreatSongComponent,
    UpdateSongComponent,
    ListSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
