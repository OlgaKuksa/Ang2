import { Injectable } from "@angular/core";
import { Message } from "../classes/message";
import { mockMessages } from "./mockMessages";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class MailService {
  constructor() {}

  getMessages(): Observable<Message[]> {
    return of(mockMessages);
  }
}
