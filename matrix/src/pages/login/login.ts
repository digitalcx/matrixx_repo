import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {SlidesPage} from '../slides/slides'
import { SettingsPage } from '../settings/settings';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }
  goGetStartedPage(){
    this.navCtrl.push(HomePage);
  }
  goSingUPPage(){
    this.navCtrl.push(SlidesPage);  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
