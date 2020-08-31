import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../interfaces/todo';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: ITodo[];

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res: ITodo[]) => this.todos = res);
    // this.http.get('https://todos-api-dev.herokuapp.com/todos').subscribe((data: ITodo[]) => {
    //   console.log(data);
    //   this.todos = data;
    // })
  }

}
