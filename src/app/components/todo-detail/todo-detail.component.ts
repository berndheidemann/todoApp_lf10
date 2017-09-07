import { Component, OnInit, Input } from '@angular/core';
import { TodoEntry } from '../../models/todo-entry';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() value: TodoEntry;

  constructor() { }

  ngOnInit() {
  }

}
