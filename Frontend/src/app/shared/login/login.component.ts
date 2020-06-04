import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthenticationService } from 'src/app/auth/authentication.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  userType: string = 'null';
  // const match;
  constructor(private loginService: LoginService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    // reset login status
    this.authService.logout();

  }
  onSubmit() {
    if (this.username == '' || this.password == '') {
      // this.sendNotification1();
      return;
    }
    this.userType = this.loginService.getUserType(this.username);
    console.log("inside student login component" + this.userType + "this.userType");
    
    this.authService.login(this.username, this.password, this.userType)
      .subscribe(
        data => {
          console.log('Observer got a next value: ' + data);
          ////temporary items
          localStorage.setItem('userId', this.username);
          localStorage.setItem('userType', this.userType);
          ///////////////////
          if(data==true && this.userType=="Student"){
            this.router.navigate(['/student/dashboard']);
          }else if(data==true && this.userType=="Admin"){
            this.router.navigate(['/admin/dashboard']);
          }else if(data==true && this.userType=="Company"){
            this.router.navigate(['/company/dashboard']);
          }else{
            this.router.navigate(['/login']);
          }
        },
        error => {
          console.error('Observer got an error: ' + error),
            () => console.log('Observer got a complete notification')
        }
      );   
  }
}
