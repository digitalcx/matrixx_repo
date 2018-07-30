import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogPage } from '../log/log';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agree: boolean;
  isenabled:boolean=false;

  constructor(public navCtrl: NavController ) {
    
  }
  goSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }
  goAnOtherPage(){
    
    this.navCtrl.push(LoginPage);
    }
    
    goLicensePage(){
      this.navCtrl.push(LogPage);
    }

    updatebutton(){
      this.isenabled=!this.isenabled;
    }

}
