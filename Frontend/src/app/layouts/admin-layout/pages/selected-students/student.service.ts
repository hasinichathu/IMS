import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student} from 'src/app/layouts/admin-layout/models/student.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students : Student[];
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`, {params: {batch:"batch16", isSelected: "true"}} )
  }
}

