import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { Router, RouterModule } from "@angular/router";
import { NewMailComponent } from "../new-mail/new-mail.component";
import { MailComponent } from "../mail/mail.component";
import { HeaderComponent } from "../shared/header/header.component";
import { LeftmenuComponent } from "../shared/leftmenu/leftmenu.component";
import { MailService } from "../services/mail.service";
import { FilterApplyPipe } from "../filter-apply.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "inbox",
        component: MailComponent
      },
      {
        path: "sent",
        component: MailComponent
      },
      {
        path: "drafts",
        component: MailComponent
      },
      {
        path: "marked",
        component: MailComponent
      },
      {
        path: "newmail",
        component: NewMailComponent
      },
      {
        path: "",
        redirectTo: "inbox"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    MailComponent,
    NewMailComponent,
    HeaderComponent,
    LeftmenuComponent,
    FilterApplyPipe
  ],
  providers: [MailService]
})
export class DashboardModule {}
