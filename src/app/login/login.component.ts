import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  serverMessage: string = "";

  tryToLogIn() {
    this.serverMessage = this.loginService.setLogIn(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }
}
