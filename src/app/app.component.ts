import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent],
  template: '<app-todo-list></app-todo-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-crud';
}