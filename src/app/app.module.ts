import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcyComponent } from './calcy/calcy.component';
import { adminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    CalcyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    adminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
