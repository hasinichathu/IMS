import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BasicCompany} from '../Models/basic-company.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  comapnies: BasicCompany[];
  constructor(private http:HttpClient) { }
  getAllCompanyDetails(){
    return this.http.get<BasicCompany[]>(`${environment.apiUrl}/companies`)
  }
}
