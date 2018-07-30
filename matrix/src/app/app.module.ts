import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { HttpClientModule} from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogPage } from '../pages/log/log';
import { SlidesPage } from '../pages/slides/slides';
import { SettingsPage } from '../pages/settings/settings';
import { DashboardPage } from '../pages/dashboard/dashboard';
import {UtilitiesService} from '../providers/UtilitiesService';
import {HomeService} from '../providers/HomeService';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogPage,
    SlidesPage,
    SettingsPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogPage,
    SlidesPage,
    SettingsPage,
    DashboardPage
  ],
  providers: [
    HomeService,
    UtilitiesService,
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
