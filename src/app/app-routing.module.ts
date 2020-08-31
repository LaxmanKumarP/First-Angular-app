import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { AddEditTodoComponent } from './todos/add-edit-todo/add-edit-todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'todo', component: TodoListComponent },
{ path: 'edit-todo', component: AddEditTodoComponent },
{ path: '', redirectTo: 'todo', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
