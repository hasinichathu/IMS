import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login/login.service';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
} 

export const ADMINROUTES: RouteInfo[] = [
  { path: '/admin/dashboard',           title: 'Dashboard',         icon: 'nc-palette',   class: '' },
  { path: '/admin/selectedStudents',    title: 'Selected Students', icon: 'nc-satisfied', class: '' },
  { path: '/admin/notSelectedStudents', title: 'Remaining Students',icon: 'nc-user-run',  class: '' },
  { path: '/admin/organizations',       title: 'Organizations',     icon: 'nc-globe-2',   class: '' },
  { path: '/admin/monthlyReports',      title: 'Monthly Reports',   icon: 'nc-paper',     class: '' },
  { path: '/admin/feedback',            title: 'Feedback',          icon: 'nc-trophy',    class: '' },
  { path: '/admin/requests',            title: 'Requests',          icon: 'nc-simple-add',class: '' },
  { path: '/admin/manageAdmins',        title: 'Manage Admins',     icon: 'nc-atom',      class: '' },
  { path: '/admin/batch',               title: 'Batch management',  icon: 'nc-tag-content',class: '' },
  { path: '/admin/user',                title: 'User Profile',      icon: 'nc-single-02', class: '' },
  ];
export const STUDENTROUTES: RouteInfo[] = [
  { path: '/student/dashboard',         title: 'Dashboard',         icon: 'nc-bank',      class: '' },
  { path: '/student/selectedStudents',  title: 'Selected Students', icon: 'nc-diamond',   class: '' },
];
export const COMPANYROUTES: RouteInfo[] = [
  { path: '/company/dashboard',         title: 'Dashboard',         icon: 'nc-bank',      class: '' },
  { path: '/company/Students',          title: 'Selected Students', icon: 'nc-diamond',   class: '' },
  { path: '/company/Profile',           title: 'Profile',           icon: 'nc-diamond',   class: '' },

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userType:string='';
  constructor(private loginService: LoginService) { }

  public menuItems: any[];
  ngOnInit(): void {
    ////temporary variable
    this.userType=localStorage.getItem("userType");
    ////////////////////////
    if(this.userType=="Student"){
      console.log("inside sidebar Student");
      this.menuItems = STUDENTROUTES.filter(menuItem => menuItem);
    }else if(this.userType=="Admin"){
      console.log("inside sidebar admin");
      this.menuItems = ADMINROUTES.filter(menuItem => menuItem);
    }else if(this.userType=="Company"){
      console.log("inside sidebar comapny");
      this.menuItems = COMPANYROUTES.filter(menuItem => menuItem);
    }else{
      
    }
  }

}
