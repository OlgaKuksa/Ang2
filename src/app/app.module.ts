import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MailComponent } from "./mail/mail.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LeftmenuComponent } from "./shared/leftmenu/leftmenu.component";
import { MailService } from "./services/mail.service";
import { AppRoutingModule } from ".//app-routing.module";
import { NewMailComponent } from "./new-mail/new-mail.component";
import { FilterApplyPipe } from "./filter-apply.pipe";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginService } from "./services/login.service";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    LeftmenuComponent,
    NewMailComponent,
    FilterApplyPipe,
    LoginComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [MailService, AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
