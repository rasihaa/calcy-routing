import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { adminRoutingModule } from './admin-routing.module';
import { ListuComponent } from './listu/listu.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    adminRoutingModule
  ]
})
export class adminModule { }
