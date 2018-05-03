import { Component, OnInit } from "@angular/core";
import { MailService } from "../services/mail.service";
import { Message } from "../classes/message";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.scss"]
})
export class MailComponent implements OnInit {
  filteredText: string;

  constructor(public mailService: MailService, private router: Router) {}

  ngOnInit() {
    let folder: string = this.router.url;
    this.getMessages(folder);
    this.mailService.subject.subscribe(text => (this.filteredText = text));
  }

  public messages: Message[];

  getMessages(folder: string): void {
    this.mailService
      .getMessages()
      .pipe(
        tap(
          messages =>
            (this.messages = messages.filter(
              message => "/dashboard/" + message.folder == folder
            ))
        )
      )
      .subscribe();
  }
}
