import { Component } from '@angular/core';
import {BookFormComponent} from './book-form/book-form.component';
@Component({
  selector: 'app-root',
  template: '<book-form></book-form>'
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
