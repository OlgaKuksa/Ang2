import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MailComponent } from "./mail/mail.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LeftmenuComponent } from "./shared/leftmenu/leftmenu.component";
import { MailService } from './services/mail.service';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    LeftmenuComponent
  ],
  imports: [BrowserModule],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
