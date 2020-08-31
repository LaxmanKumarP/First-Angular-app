import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../interfaces/todo';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${environment.apiUrl}/todos`).pipe(map(res => res as ITodo[]));
  }
}
