import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
color: string ='white';
Green:string = 'green';
Pink:string = ' #ff80ff';
White:string='#ffffff';
  constructor(public navCtrl: NavController) {
  }
getStyle()
{
  return this.color;
}
}
