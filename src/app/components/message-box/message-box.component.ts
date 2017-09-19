import { Component, OnInit } from '@angular/core';
import { MessageBoxService } from '../../services/message-box.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MessageBoxType } from '../../models/message-box-type.enum';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  animations: [
    trigger(
      'messageBoxAnimation',
      [
        transition(
          ':enter', [
            // style({ transform: 'translateX(100%)', opacity: 0 }),
            // animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
            style({ opacity: 0 }),
            animate('500ms', style({ 'opacity': 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ 'opacity': 1 }),
            animate('1000ms', style({ 'opacity': 0, 'width': '50%' }))
          ]
        )]
    )
  ],
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor(private messageBoxService: MessageBoxService) { }

  ngOnInit() {
  }

  get message(): string {
    return this.messageBoxService.message;
  }

  get messageBoxType(): string {
    return MessageBoxType[this.messageBoxService.messageBoxType];

  }



}
