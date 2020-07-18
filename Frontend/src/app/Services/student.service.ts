import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BasicStudent } from '../models/basic-student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students : BasicStudent[];
  constructor(private http: HttpClient) { }
  getSelectedStudentsInBatch(batch:String): Observable<BasicStudent[]> {
    return this.http.get<BasicStudent[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "true"}} )
  }

  getNotSelectedStudentsInBatch(batch:String): Observable<BasicStudent[]> {
    return this.http.get<BasicStudent[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "false"}} )
  }

  getSelectedStudentsInCompany(companyName:String,batch:String): Observable<BasicStudent[]> {
    return this.http.get<BasicStudent[]>(`${environment.apiUrl}/students`, {params: {batch:`${batch}`, isSelected: "true", companyName:`${companyName}`}} )
  }
}
