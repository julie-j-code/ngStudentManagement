import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { LoginStudentsComponent } from './components/login-students/login-students.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DataTablesModule } from 'angular-datatables';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    EditStudentsComponent,
    LoginStudentsComponent,
    ListStudentsComponent,
    RegisterStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
