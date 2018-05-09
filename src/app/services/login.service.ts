import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  constructor(private router: Router) {}

  private loggedIn: boolean = false;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLogIn(username: string, password: string): string {
    if (username == "test" && password == "test123") {
      this.loggedIn = true;
      this.router.navigate(["/dashboard"]);
      return "";
    } else
      return "Username and password don't match. Try again and click Log in button when you finish";
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(["/login"]);
  }
}
