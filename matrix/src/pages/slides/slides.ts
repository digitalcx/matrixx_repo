import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastctrl:ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }
  slider=[
    {
      //title:'ionic is awesome',
      //description:'ionic is in top of angular',
      image:"assets/imgs/pic1.png"
      
    },
    {
      //title:'ionic is awesome',
     // description:'ionic is in top of angular',
      image:"assets/imgs/pic2.png"
    },
    {
    //  title:'ionic is awesome',
    //  description:'ionic is in top of angular',
      image:"assets/imgs/pic3.png"
    },
    {
     // title:'ionic is awesome',
     // description:'ionic is in top of angular',
      image:"assets/imgs/pic4.png"
    }
  ];
  slidechanged(){
  /*  this.toastctrl.create({
      message:'slide changed'
    }).present();*/
  }

}
