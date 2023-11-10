import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  tasks = signal<any[]>([])

  addTask = () => {
    console.log("la llamada funciona");
    this.tasks().push(1)
    //this.tasks.update(value => this.tasks())
  }

  deleteAll = () => {
    this.tasks.update(value => []);
  }
}
