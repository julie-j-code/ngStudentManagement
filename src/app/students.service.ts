import { Injectable } from '@angular/core';
// pour consommer un API, il faut utiliser HTTP Client
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url='http://localhost:3000/students';

  constructor( private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(this.url)
  }

  saveStudentData(data:any){
    console.log(data);
    return this.http.post(this.url,data);

  }
}
