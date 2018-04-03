import { Component, OnInit } from "@angular/core";
import { MailService } from "../services/mail.service";
import { Message } from "../classes/message";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.getMessages();
  }

  messages: Message[];

  getMessages() {
    this.messages = this.mailService.getMessages();
  }
}
