import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent{
model = new Book(1, 'book name', 'author name', 'publication name is optional');
onSubmit() {
  //code to post data
}
newBook() {
  this.model = new Book(0,'','','');
}
  constructor() { }
}
