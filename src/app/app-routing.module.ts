import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepcandidatoComponent } from './stepcandidato/stepcandidato.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent
  },
  {
    path: "task",
    component: StepcandidatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
