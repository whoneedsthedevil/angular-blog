import { Injectable } from '@angular/core';
 
@Injectable()
export class MessageService {
  messages: string[] = [];
  currentMessage: string;
  isActive: boolean = false;
 
  add(message: string) {
  	this.isActive = true;
    this.messages.push(message);
    this.currentMessage = message;
    setTimeout(() => (this.isActive = false), 3000)
  }
 
  clear() {
    this.messages = [];
  }
}