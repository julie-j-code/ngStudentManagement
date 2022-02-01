import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from "./components/add-students/add-students.component";
import { EditStudentsComponent } from "./components/edit-students/edit-students.component";
import { ListStudentsComponent } from "./components/list-students/list-students.component";
import { LoginStudentsComponent } from "./components/login-students/login-students.component";
import { RegisterStudentsComponent } from "./components/register-students/register-students.component";

const routes: Routes = [
  {path:'add', component:AddStudentsComponent},
  {path:'edit', component:EditStudentsComponent},
  {path:'list', component:ListStudentsComponent},
  {path:'login', component:LoginStudentsComponent},
  {path:'register', component:RegisterStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
