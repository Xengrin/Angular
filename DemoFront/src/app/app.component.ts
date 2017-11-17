import { Component, OnInit } from '@angular/core';

import * as data from './frontSample.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  PageElement: string;
  Content: string;
  UserName: string;
  UserPassword: string;
  LogIn(){
    this.UserName = '';
    this.UserPassword = '';
  }

  ngOnInit(){
    let wrapper = (<any>data);
    this.PageElement = wrapper.PageElement;
    this.Content = wrapper.Content;
    console.log(wrapper.PageElement);
    console.log(wrapper.Content);
  }
}
