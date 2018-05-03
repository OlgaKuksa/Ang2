import { Injectable } from "@angular/core";
import { Message } from "../classes/message";
import { mockMessages } from "./mockMessages";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { of } from "rxjs/observable/of";

@Injectable()
export class MailService {
  constructor() {}

  public messages: Message[];
  public subject = new Subject<string>();

  public getMessages(): Observable<Message[]> {
    this.messages = mockMessages;
    return of(this.messages);
  }

  public addMessage(message: Message): void {
    this.messages.push(message);
    mockMessages.push(message);
  }
  /*
  public getFilterInput(text: string) {
    this.subject.next(text);
  }

  public sendFilter(): Observable<string> {
    return this.subject.asObservable();
  }
  */
}
