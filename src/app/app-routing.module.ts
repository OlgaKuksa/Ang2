import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MailComponent } from "./mail/mail.component";
import { NewMailComponent } from "./new-mail/new-mail.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
