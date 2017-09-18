import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-priority-chooser',
  templateUrl: './priority-chooser.component.html',
  styleUrls: ['./priority-chooser.component.css']
})
export class PriorityChooserComponent implements OnInit {

  @Input() currentlySelectedPriority: number;

  @Output() priorityUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  select(prio: number) {
    if (this.currentlySelectedPriority !== prio) {
      this.priorityUpdated.emit(prio);
    } else {
      this.priorityUpdated.emit(undefined);
    }
  }

}
