import { Component, OnInit } from '@angular/core';
import { Batch } from '../../../../models/batch.model';
import { BatchService } from '../../../../services/batch.service';
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
  batches:Batch[]; 
  constructor(private batchService:BatchService) { }

  ngOnInit(): void {
    this.batchService.getAllBatches().subscribe(data=>{
      this.batches=data;
    });
  }

}
