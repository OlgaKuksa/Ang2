import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MailComponent } from "./mail/mail.component";
import { NewMailComponent } from "./new-mail/new-mail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/inbox",
    pathMatch: "full"
  },
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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
