import { Injectable } from '@angular/core';
import { MessageBoxType } from '../models/message-box-type.enum';

@Injectable()
export class MessageBoxService {

  constructor() { }

  private _message: string;
  private _messageBoxType: MessageBoxType = MessageBoxType.success;

  display(message: string, messageBoxType?: MessageBoxType) {
    this._message = message;
    if (!messageBoxType) {
      this._messageBoxType = messageBoxType;
    } else {
      this._messageBoxType = MessageBoxType.success;
    }
    setTimeout(() => {
      this._message = '';
    }, 3000);
  }

  get message(): string {
    return this._message;
  }

  get messageBoxType(): MessageBoxType {
    return this._messageBoxType;
  }

}
