import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student} from 'src/app/layouts/admin-layout/models/student.model';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students : Student[];
  constructor(private http: HttpClient) { }
  getSelectedStudentsInBatch(batch:String): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "true"}} )
  }

  getNotSelectedStudentsInBatch(batch:String): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "false"}} )
  }

  getSelectedStudentsInCompany(companyName:String,batch:String): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "true", companyName:`${companyName}`}} )
  }
}

