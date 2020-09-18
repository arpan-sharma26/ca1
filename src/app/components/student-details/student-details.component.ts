import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  // These are the 2 variables of which we used string interpolation to display their values.
  ques1 = "Question 1:";
  description = "Create service file with name student and the inject it for displaying the list of the students studying in the organization";
  // An empty array variable which would hold the value of the StudentService which we created.
  students = [];
  // Here the service is accessed through private variable var1.
  constructor(private var1: StudentService, private var2: StudentService) { }

  ngOnInit(): void {
    // Here the studentList function is accessed which is in StudentService.
    this.students = this.var1.studentList();
  }

}
