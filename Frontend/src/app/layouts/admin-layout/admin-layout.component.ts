import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  
  currentUser: User;

  constructor( private router: Router,private authenticationService: AuthenticationService ) {}

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  
}
