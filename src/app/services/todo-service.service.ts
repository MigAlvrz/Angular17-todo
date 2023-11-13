import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, of, timeout } from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos =  async () => {
    let todos = await firstValueFrom(this.http.get(`${this.todosUrl}${this.todosLimit}`))
    return todos
  }
}
