import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { SlidesPage } from './slides';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
  ],
})
export class SlidesPageModule {}
