import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import {EmployeesService} from '../service/employees.service'
  
@Component({
    selector: 'app-root',
    templateUrl: './employee.component.html'
  })
export class EmployeeComponent { 
    title = 'AppUI';
  employees: Employee[] = [];
  employee: Employee={
    id: 0,
    department: '',
    fio:'',
    dateOfBirth: new Date,
    dateOfEmployment: new Date,
    wage: 0
  }
  constructor(private employeeService: EmployeesService){

  }

  ngOnInit(): void {
    this.getAllEnployees();
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee)
    .subscribe(
      Response=>{
        this.getAllEnployees();
        this.employee={
            id: 0,
            department: '',
            fio:'',
            dateOfBirth: new Date,
            dateOfEmployment: new Date,
            wage: 0
        };
      }
    )
  }

  getAllEnployees(){
    this.employeeService.getAllEmployees()
    .subscribe(
      Response=>{
        this.employees = Response;
      }
    )
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      Response =>{
        this.getAllEnployees();
      }
    )
  }

  clinForm(){
    this.employee={
      id: 0,
      department: '',
      fio:'',
      dateOfBirth: new Date,
      dateOfEmployment: new Date,
      wage: 0
    }
  }

  updateEmployee(employee: Employee){
    this.employeeService.updateEmployee(employee)
    .subscribe(
      Response=>{
        console.log(employee);
        this.getAllEnployees();
      }
    )
    this.employee={
      id: 0,
      department: '',
      fio:'',
      dateOfBirth: new Date,
      dateOfEmployment: new Date,
      wage: 0
  };
  }

  populateForm(employee: Employee){
    this.employee=employee;
  }

  addEmplyee(){
    this.employeeService.addEmployee(this.employee)
    .subscribe(
      Response=>{
        console.log(Response);
        this.getAllEnployees();
      }
    )
  }
}
