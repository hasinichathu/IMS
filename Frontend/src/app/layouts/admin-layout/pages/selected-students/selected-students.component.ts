import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { BasicStudent } from '../../../../models/basic-student.model';

@Component({
  selector: 'app-selected-students',
  templateUrl: './selected-students.component.html',
  styleUrls: ['./selected-students.component.scss']
})
export class SelectedStudentsComponent implements OnInit {
  students: BasicStudent[];
  batchId : String = "batch16";
  nameSearch: string = "";
  emailSearch: string = "";
  indexSearch: string = "";
  batchSearch: string = "";
  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    this.stuService.getSelectedStudentsInBatch(this.batchId).subscribe(data => {
      this.students = data;
    });
  }

  clearSearch() {
    this.nameSearch = "";
    this.emailSearch = "";
    this.indexSearch = "";
    this.batchSearch = "";
  }
}
