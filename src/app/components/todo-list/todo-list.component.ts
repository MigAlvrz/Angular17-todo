import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../../services/todo-service.service';
import { Observable, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  tasks = signal<any>([])

  constructor(private TodoService: TodoService) {}

  ngOnInit() {
    this.getTodos(); 
  }

  getTodos = async () => {
    //Just like that!
    this.tasks.set(await this.TodoService.getTodos())
  }

  addTask = () => {
    this.tasks().push(1)
  }

  deleteAll = () => {
    this.tasks.update(value => []);
  }
}
