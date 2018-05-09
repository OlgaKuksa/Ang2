import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Message } from "../classes/message";
import { MailService } from "../services/mail.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-mail",
  templateUrl: "./new-mail.component.html",
  styleUrls: ["./new-mail.component.scss"]
})
export class NewMailComponent implements OnInit {
  constructor(private mailService: MailService, private router: Router) {}

  ngOnInit() {}

  myForm: FormGroup = new FormGroup({
    to: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}")
    ]),
    topic: new FormControl(),
    text: new FormControl("", [Validators.required])
  });

  public addMessageHandler(folder: string): void {
    const formModel = this.myForm.value;
    let message: Message = {
      id: Date.now().toString(),
      headers: [
        {
          name: formModel["to"],
          value: formModel["to"]
        }
      ],
      raw: formModel["text"],
      internalDate: new Date(),
      folder: folder,
      isMarked: false,
      topic: formModel["topic"]
    };
    this.mailService.addMessage(message);
    this.router.navigate(["dashboard/" + folder]);
  }
}
