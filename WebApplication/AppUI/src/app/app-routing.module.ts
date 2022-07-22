import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { About_company } from './About_company/About_company.component';
import { EmployeeComponent } from './Employee/employee.component';

const routes: Routes = [
  {path:'about_company', component: About_company},
  {path:'employees', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
