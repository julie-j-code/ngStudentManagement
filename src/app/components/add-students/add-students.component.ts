import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StudentsService } from "../../students.service";

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  message:boolean=false;

  constructor(private student:StudentsService) {
  }

  addStudent = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl('')
    }
  )

  saveStudent(){
    // console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
      this.addStudent.reset({});
    });
  }

  removeMessage(){
    this.message=false;
  }

  ngOnInit(): void {
  }

}
