import { Component, OnInit } from '@angular/core';
import { BasicStudent } from '../../../../models/basic-student.model';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-not-selected-students',
  templateUrl: './not-selected-students.component.html',
  styleUrls: ['./not-selected-students.component.scss']
})
export class NotSelectedStudentsComponent implements OnInit {
  students : BasicStudent[];
  batchId : String = "batch16";
  constructor(private stuService : StudentService) { }

  ngOnInit(): void {
    this.stuService.getNotSelectedStudentsInBatch(this.batchId).subscribe(data=>{
      this.students = data;
    });
  }

}
