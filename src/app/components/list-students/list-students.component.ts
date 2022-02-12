import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../../students.service";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  studentData:any={};

  constructor(private student:StudentsService) { 
  }

  ngOnInit(): void {
    this.student.getAllStudents().subscribe((allData)=>{
      // console.log(allData);
      this.studentData=allData;
    })
  }

  deleteStudent(student_id:number){
    // console.log(student_id)
    this.student.deleteStudentData(student_id).subscribe((result)=>{
      // console.log(result)
      this.ngOnInit();
    })
  }

}
