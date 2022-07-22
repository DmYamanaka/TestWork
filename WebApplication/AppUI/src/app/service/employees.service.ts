import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = 'http://localhost:56858/api/Empls';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  deleteEmployee(id: number): Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl + '/' + id)
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,employee)
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl + "/" + employee.id, employee);
  }
}
