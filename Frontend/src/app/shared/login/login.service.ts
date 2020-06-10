import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  // getData(uname:String,password:String,type:String):Observable<string>{
  //   return this
  //             .http
  //             .get<string>('//localhost:3000/todosStaff/'+uname);  
  // }
  // getData(uname: String, password: String, type: String) {
  //   return this
  //     .http
  //     .post('//localhost:8080/login/user',
  //       {
  //         "id": uname,
  //         "password": password,
  //         "type": type
  //       });
  // }
  
  getUserType(id:string):string{
    //check if id belongs to a student.
    //if id contains number user most likely to be a student.
    var studentCheck = /^[0-9]{6}[A-Za-z]/;

    //check if id belongs to a admin.
    //if id contains "-a" user is an admin.
    var adminCheck = /^\w*-a/;

    if(studentCheck.test(id)){
      return "Student"
    }else if(adminCheck.test(id)){
      console.log("is admin");
      return "Admin";
    }
    return "Company";
  }
}
