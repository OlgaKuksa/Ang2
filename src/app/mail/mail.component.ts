import { Component, OnInit } from "@angular/core";
import { MailService } from "../services/mail.service";
import { Message } from "../classes/message";
import { Router } from "@angular/router";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.scss"]
})
export class MailComponent implements OnInit {
  constructor(private mailService: MailService, private router: Router) {}

  ngOnInit() {
    let folder: string = this.router.url;
    this.getMessages(folder);
  }

  public messages: Message[];

  getMessages(folder: string): void {
    this.mailService
      .getMessages()
      .subscribe(
        messages =>
          (this.messages = messages.filter(
            message => "/" + message.folder == folder
          ))
      );
  }
}
