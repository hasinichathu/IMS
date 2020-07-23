import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Batch } from '../models/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http:HttpClient) { }

  getAllBatches(){
    return this.http.get<Batch>(`${environment.apiUrl}/batches`);
  }
  AddBatch(id:string, des:string){

  }
}
