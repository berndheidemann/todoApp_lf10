import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-due-date',
  templateUrl: './todo-due-date.component.html',
  styleUrls: ['./todo-due-date.component.css']
})
export class TodoDueDateComponent implements OnInit {

  @Input()
  value: Date;



  constructor() { }

  ngOnInit() {
  }

  get dateFormat(): string {
    if (this.value) {

      // if (Date.now() > this.value.) {
      //   return 'actual';
      // }
    }
    return '';
  }

}
