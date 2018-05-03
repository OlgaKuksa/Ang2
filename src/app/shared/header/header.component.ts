import { Component, OnInit } from "@angular/core";
import { MailService } from "../../services/mail.service";
import { Message } from "../../classes/message";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private mailService: MailService,
    private loginService: LoginService
  ) {}

  public filteredMessages: Message[];

  ngOnInit() {
    this.mailService
      .getMessages()
      .subscribe(messages => (this.filteredMessages = messages));
  }

  onInputChange(event: any): void {
    /*
    console.log(event.target.value);
    console.log(
      this.filteredMessages.filter(message =>
        message.raw
          .toUpperCase()
          .trim()
          .includes(event.target.value.toUpperCase().trim())
      )
    );
    */
    this.mailService.subject.next(event.target.value);
  }

  logout(): void {
    this.loginService.logout();
  }
}
