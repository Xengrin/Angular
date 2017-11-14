import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './TodoService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Promise<any>;
  constructor(todoService: TodoService){
    this.todos = todoService.getTodos();
  }
  title = 'app';
}
