import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { TodoService } from './todo.service';



@NgModule({
  declarations: [TodoListComponent, AddEditTodoComponent],
  imports: [
    CommonModule
  ],
  providers: [TodoService]
})
export class TodosModule { }
