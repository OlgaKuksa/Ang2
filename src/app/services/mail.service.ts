import { Injectable } from "@angular/core";
import { Message } from "../classes/message";
import { mockMessages } from "./mockMessages";

@Injectable()
export class MailService {
  constructor() {}

  getMessages() {
    return mockMessages;
  }
}
