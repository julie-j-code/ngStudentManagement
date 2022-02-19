import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../../students.service";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  studentData:any={};
  dtOptions:DataTables.Settings={};

  constructor(private student:StudentsService) { 
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:5,
      processing:true
    },
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

  // editStudent(student_id:number){
  //   console.log(student_id);

  // }


}
