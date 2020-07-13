import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student} from 'src/app/layouts/admin-layout/models/student.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
}
