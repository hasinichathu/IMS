import { Component, OnInit } from '@angular/core';
import { BasicCompany } from '../../../../Models/basic-company.model';
import { CompanyService } from '../../../../Services/company.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  companies:BasicCompany[];
  constructor(private comService: CompanyService) {
    
  }

  ngOnInit(): void {
    this.comService.getAllCompanyDetails().subscribe(data=>{
      this.companies = data;
    });
  }

}
