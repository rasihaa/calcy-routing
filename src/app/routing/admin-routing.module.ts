import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ListuComponent } from './listu/listu.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'listu', component:ListuComponent},
  { path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule { }
