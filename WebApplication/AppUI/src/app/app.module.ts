import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component'
import {About_company} from './About_company/About_company.component'
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    About_company,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:About_company},
      {path:'employees', component:EmployeeComponent}
    ]
     
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
