import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../../../Services/student.service';
@Component({
  selector: 'app-not-selected-students',
  templateUrl: './not-selected-students.component.html',
  styleUrls: ['./not-selected-students.component.scss']
})
export class NotSelectedStudentsComponent implements OnInit {
  students : Student[];
  batchId : String;
  constructor(private stuService : StudentService) { }

  ngOnInit(): void {
    this.stuService.getNotSelectedStudentsInBatch(this.batchId).subscribe(data=>{
      this.students = data;
    });
  }

}
