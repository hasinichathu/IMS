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

  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
  getAllStudents(): Observable<Student[]> {
    console.log("inside getall students");
    return this.http.get<Student[]>(`${environment.apiUrl}/students/`)
  }
}

