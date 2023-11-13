import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [HttpClientModule],
    imports: [CommonModule, RouterOutlet, TodoListComponent, HttpClientModule],
})
export class AppComponent {
  title = 'ang17Todo';
}
