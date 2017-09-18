import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() value: number;

  constructor() { }


  ngOnInit() {
  }

}
