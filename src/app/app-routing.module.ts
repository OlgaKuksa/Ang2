import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MailComponent } from "./mail/mail.component";
import { NewMailComponent } from "./new-mail/new-mail.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
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
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
