import { Component, OnInit } from "@angular/core";
import { MailService } from "../services/mail.service";
import { Message } from "../classes/message";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.scss"]
})
export class MailComponent implements OnInit {
  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.getMessages();
  }

  public messages: Message[];

  getMessages(): void {
    this.mailService
      .getMessages()
      .subscribe(messages => (this.messages = messages));
  }
}
