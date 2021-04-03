import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:any;
  constructor() {

   }

   clickEvent(){
    this.msg='Button is Clicked';
    return this.msg;
  }
}
