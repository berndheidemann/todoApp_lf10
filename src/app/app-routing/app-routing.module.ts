import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoFormComponent } from '../components/todo-form/todo-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent,
  },
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'new',
    component: TodoFormComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
