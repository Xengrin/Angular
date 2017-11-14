import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../Book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
   styleUrls: ['./book-form.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class BookFormComponent implements OnInit {
  bookForm : FormGroup;
  public submitted: boolean;
  constructor() { }
  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl('book name', Validators.required),
      author: new FormControl('book author', Validators.required),
      publication: new FormControl('publication is optional')
    });
  }
    onSubmit(model: Book, isVaild: boolean){
      this.submitted = true;
      console.log(model, isVaild);
    }
  }


